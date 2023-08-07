import { UserRepositories } from "../repositories/UserRepositories";


interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

export class CreateUserService{
    async execute({ name, email, admin } : IUserRequest){
        
        if(!email){
            throw new Error("Email Incorreto");
        }

        const userAlreadyExists = await UserRepositories.findOneBy({ email:email });

        if(userAlreadyExists){
            throw new Error("Usuario ja existe");
        }

        const user = await UserRepositories.create({ name,email,admin });  
        
        return user;
    }
}

