import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { stringify } from "querystring";


export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  // const { admin } = await UsersRepositories.findOne(user_id);
  const admin  = await UsersRepositories.findOneBy({ id:user_id });
  // Verificar se usuario admin

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}
