import { ICreateFavoriteDTO } from "../../modules/create/ICreateFavoriteDTO";
import { FavoriteEntity } from "../../entities/Favorite";
import { prisma } from "../../database/prisma";
import { IFavoriteRepository } from "../IFavoriteRepository";

export class FavoriteRepository implements IFavoriteRepository {
  async create({
    userId,
    characterId,
  }: ICreateFavoriteDTO): Promise<FavoriteEntity> {
    return await prisma.favorite.create({
      data: { userId, characterId },
    });
  }

  async findByUserId(userId: string): Promise<FavoriteEntity[] | null> {
    return await prisma.favorite.findMany({
      where: {
        userId,
      },
    });
  }

  async findByUserIdAndCharacterId(
    userId: string,
    characterId: string
  ): Promise<FavoriteEntity | null> {
    return await prisma.favorite.findUnique({
      where: {
        userId,
        characterId,
      },
    });
  }

  async findAll(): Promise<FavoriteEntity[]> {
    return await prisma.favorite.findMany();
  }

  async delete(userId: string, characterId: string) {
    await prisma.favorite.deleteMany({ where: { userId, characterId } });
  }

  
}
