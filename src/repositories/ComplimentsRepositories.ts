
import { AppDataSource } from "../data-source";
import { Compliment } from "../entities/Compliment";

export const ComplimentsRepositories = AppDataSource.getRepository(Compliment);


