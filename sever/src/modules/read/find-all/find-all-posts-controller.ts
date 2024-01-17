import { Request, Response } from "express";
import { FindAllPostsUseCase } from "./find-all-posts-usecase";

export class FindAllPostsController {
  constructor(private findAllPostsUseCase: FindAllPostsUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const posts = await this.findAllPostsUseCase.execute();
      return response
        .status(200)
        .json({ message: "Request made successfully", data: posts });
    } catch (error) {
      return response.json({ error });
    }
  }
}