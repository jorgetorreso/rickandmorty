import { FavoriteEntity } from "../../entities/Favorite";
import { IFavoriteRepository } from "../../repositories/IFavoriteRepository";

interface ICreateFavoriteRequest {
  userId: string;
  characterId: string;
}


export class CreateFavoriteUseCase {
  constructor(private favoriteRepository: IFavoriteRepository) { }

  async execute({ userId, characterId }: ICreateFavoriteRequest): Promise<FavoriteEntity> {
    return await this.favoriteRepository.create({
      userId,
      characterId
    })
  }
}