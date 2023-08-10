
import { AppDataSource } from "../data-source";
import { Tag } from "../entities/Tag";

export const TagsRepositories = AppDataSource.getRepository(Tag);


