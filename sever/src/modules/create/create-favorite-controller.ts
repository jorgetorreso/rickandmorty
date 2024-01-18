import { Request, Response } from "express";
import { CreateFavoriteUseCase } from "./create-favorite-usecase";

export class CreateFavoriteController {
  constructor(private createFavoriteUseCase: CreateFavoriteUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, characterId } = request.body;
    try {
      const character = await this.createFavoriteUseCase.execute({ userId, characterId });
      return response
        .status(201)
        .json({
          message: "Character add to favorite successfully in dataset",
          data: character,
        });
    } catch (error) {
      console.log(error)
      return response.status(400).json({ error });
    }
  }
}