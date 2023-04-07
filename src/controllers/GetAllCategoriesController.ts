import { Request, Response } from "express";
import { GetAllCategoriesSevice } from "../services/GetAllCategoriesService";

export class GetAllCategoriesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllCategoriesSevice();

    const categories = await service.execute();

    return response.json(categories);
  }
}