import { ICreateFavoriteDTO } from "../modules/create/ICreateFavoriteDTO";
import { FavoriteEntity } from "../entities/Favorite";

export interface IFavoriteRepository {
  create(data: ICreateFavoriteDTO): Promise<FavoriteEntity>;
  findByUserId(userId: string): Promise<FavoriteEntity[] | null>;
  findAll(): Promise<FavoriteEntity[]>;
  delete(id: string): Promise<void>;
}
