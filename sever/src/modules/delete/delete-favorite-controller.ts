import { Request, Response } from "express";
import { DeleteFavoriteUseCase } from "./delete-favorite-usecase";

export class DeleteFavoriteController {
  constructor(private deleteFavoriteUseCase: DeleteFavoriteUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, characterId } = request.body;

    try {
      const post = await this.deleteFavoriteUseCase.execute(userId, characterId);
      return response.status(200).json({
        message: "Favorite successfully deleted from dataset",
        profile: post,
      });
    } catch (error) {
      console.log(error)
      return response.json({ error });
    }
  }
}