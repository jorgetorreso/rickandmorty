import { Request, Response } from "express";
import { DeleteUserUseCase } from "./delete-user-usecase";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const user = await this.deleteUserUseCase.execute(id);
      return response.status(200).json({
        message: "User successfully deleted from dataset",
        profile: user,
      });
    } catch (error) {
      return response.json({ error });
    }
  }
}