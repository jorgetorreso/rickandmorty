import { Request, Response } from "express";
import { CreatePostUseCase } from "./create-post-usecase";

export class CreatePostController {
  constructor(private createPostUseCase: CreatePostUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, text, imagefile } = request.body;

    try {
      const post = await this.createPostUseCase.execute({
        title, text, imagefile
      });
      return response
        .status(201)
        .json({
          message: "Post successfully created in dataset",
          data: post,
        });
    } catch (error) {
      return response.json({ error });
    }
  }
}