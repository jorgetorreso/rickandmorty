import { Request, Response } from "express";
import { FindAllUsersUseCase } from "./find-all-users-usecase";

export class FindAllUsersController {
  constructor(private findAllUsersUseCase: FindAllUsersUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.findAllUsersUseCase.execute();
      return response
        .status(200)
        .json({ message: "Request made successfully", data: users });
    } catch (error) {
      return response.json({ error });
    }
  }
}