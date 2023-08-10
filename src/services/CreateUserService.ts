
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
  
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await UsersRepositories.findOneBy({
      email
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = UsersRepositories.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await UsersRepositories.save(user);

    return user;
  }
}

export { CreateUserService };
