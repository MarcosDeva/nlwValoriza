import express, { NextFunction, Request, Response } from 'express'
import { AppDataSource } from './data-source'
import { router } from './routes'


AppDataSource.initialize().then(() => {
	const app = express()

	app.use(express.json())

	app.use(router)

  app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof Error) {
        return response.status(400).json({
          error: err.message,
        });
      }
  
      return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  );
  

	return app.listen(process.env.PORT)
})
