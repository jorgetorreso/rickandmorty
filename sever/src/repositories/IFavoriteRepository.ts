import { ICreateFavoriteDTO } from "../modules/create/ICreateFavoriteDTO";
import { FavoriteEntity } from "../entities/Favorite";

export interface IFavoriteRepository {
  create(data: ICreateFavoriteDTO): Promise<FavoriteEntity>;
  findByUserIdAndCharacterId(
    userId: string,
    characterId: string
  ): Promise<FavoriteEntity | null>;
  findByUserId(userId: string): Promise<FavoriteEntity[] | null>;
  findAll(): Promise<FavoriteEntity[]>;
  delete(userId: string, characterId: string): Promise<void>;
}
