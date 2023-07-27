import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");

        const app = express();

        app.use(express.json());

        app.listen(3000, ()=> console.log("Server esta rodando"));
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });




