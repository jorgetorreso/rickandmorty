import { ICreateUserDTO } from "../../modules/create/ICreateUserDTO";
import { IUpdateUserDTO } from "../../modules/edit/IUpdateUserDTO";
import { UserEntity } from "../../entities/User";
import { prisma } from "../../database/prisma";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
    async create({ }: ICreateUserDTO): Promise<UserEntity> {
        return await prisma.user.create({
            data: {},
        });
    }

    async findById(id: string): Promise<UserEntity | null> {
        return await prisma.user.findUnique({
            where: {
                id,
            },
        });
    }

    async findAll(): Promise<UserEntity[]> {
        return await prisma.user.findMany();
    }

    async update({
        id
    }: IUpdateUserDTO): Promise<UserEntity> {
        return await prisma.user.update({
            where: { id },
            data: {},
        });
    }

    async delete(id: string) {
        await prisma.user.delete({
            where: {
                id,
            },
        });
    }
}
