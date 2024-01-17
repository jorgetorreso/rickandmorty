import { Request, Response } from "express";
import { EditPostUseCase } from "./edit-post-usecase";

export class EditPostController {
  constructor(private editPostUseCase: EditPostUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, text, imagefile } = request.body;

    try {
      const post = await this.editPostUseCase.execute({
        id,
        title,
        text,
        imagefile
      })
      return response
        .status(200)
        .json({
          message: "Post successfully updated in in dataset",
          data: post,
        });
    } catch (error) {
      return response.json({ error });
    }
  }
}