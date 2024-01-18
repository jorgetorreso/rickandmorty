import { handleError } from "../../handles/errors/handleError";
import { IFavoriteRepository } from "../../repositories/IFavoriteRepository";

export class DeleteFavoriteUseCase {
  constructor(private favoriteRepository: IFavoriteRepository) {}

  async execute(userId: string, characterId: string): Promise<void> {
        return await this.favoriteRepository.delete(userId, characterId);
  }
}
