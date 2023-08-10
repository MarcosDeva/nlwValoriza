
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {
  async execute(name: string) {
    
    if (!name) {
      throw new Error("Incorrect name!");
    }

    // SELECT * FROM TAGS WHERE NAME = 'name'
    const tagAlreadyExists = await TagsRepositories.findOneBy({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }

    const tag = TagsRepositories.create({
      name,
    });

    await TagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };
