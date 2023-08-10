
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
 
    const tags = await TagsRepositories.find();

    return classToPlain(tags);
  }
}

export { ListTagsService };
