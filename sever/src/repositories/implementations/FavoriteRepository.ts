import { ICreateFavoriteDTO } from "../../modules/create/ICreateFavoriteDTO";
import { FavoriteEntity } from "../../entities/Favorite";
import { prisma } from "../../database/prisma";
import { IFavoriteRepository } from "../IFavoriteRepository";

export class FavoriteRepository implements IFavoriteRepository {
    async create({ userId, characterId }: ICreateFavoriteDTO): Promise<FavoriteEntity> {
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

    async findAll(): Promise<FavoriteEntity[]> {
        return await prisma.favorite.findMany();
    }

    async delete(id: string) {
        await prisma.favorite.delete({
            where: {
                id,
            },
        });
    }
}
