import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user-usecase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { } = request.body;

    try {
      const post = await this.createUserUseCase.execute({});
      return response
        .status(201)
        .json({
          message: "User successfully created in dataset",
          data: post,
        });
    } catch (error) {
      return response.json({ error });
    }
  }
}