import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

type VideoRequest = {
  name: string;
  description: string;
  category_id: string;
  duration: number;
}

export class CreateVideoService {
  async execute({name, description, category_id, duration }: VideoRequest): Promise<Error | Video> {
    const repo = getRepository(Video);
    const repoCategory = getRepository(Category);

    if(!await repoCategory.findOne(category_id)) {
      return new Error("Category does not exists!");
    }

    const video = repo.create({name, description, category_id, duration});

    await repo.save(video);

    return video;
  }
}