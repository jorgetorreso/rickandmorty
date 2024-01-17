import { Request, Response } from "express";
import { FindAllCharactersUseCase } from "./find-all-characters-usecase";

export class FindAllCharactersController {
  constructor(private findAllCharactersUseCase: FindAllCharactersUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const filter = request.query;
      const userId =  request.query.userId.toString();
      const characters = await this.findAllCharactersUseCase.execute({filter,userId});
      return response
        .status(200)
        .json({ message: "Request made successfully", data: characters });
    } catch (error) {
      console.log(error)
      return response.status(400).json({ error, test: '123' });
    }
  }
}