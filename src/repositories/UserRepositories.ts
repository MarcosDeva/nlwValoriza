import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export const UserRepositories = AppDataSource.getRepository(User)