import { Request, Response } from "express";
import { DeletePostUseCase } from "./delete-post-usecase";

export class DeletePostController {
  constructor(private deletePostUseCase: DeletePostUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const post = await this.deletePostUseCase.execute(id);
      return response.status(200).json({
        message: "Post successfully deleted from dataset",
        profile: post,
      });
    } catch (error) {
      return response.json({ error });
    }
  }
}