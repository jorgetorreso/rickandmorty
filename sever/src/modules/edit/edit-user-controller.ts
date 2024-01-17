import { Request, Response } from "express";
import { EditUserUseCase } from "./edit-user-usecase";

export class EditUserController {
  constructor(private editUserUseCase: EditUserUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { } = request.body;

    try {
      const post = await this.editUserUseCase.execute({ id })
      return response
        .status(200)
        .json({
          message: "User successfully updated in in dataset",
          data: post,
        });
    } catch (error) {
      return response.json({ error });
    }
  }
}