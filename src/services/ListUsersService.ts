
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

class ListUserService {
  async execute() {
  
    const users = await UsersRepositories.find();

    // return classToPlain(users);
    return users;
  }
}

export { ListUserService };
