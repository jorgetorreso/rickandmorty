import { ICreatePostDTO } from "../../modules/create/ICreatePostDTO";
import { IUpdatePostDTO } from "../../modules/edit/IUpdatePostDTO";
import { PostEnity } from "../../entities/Post";
import { prisma } from "../../database/prisma";
import { IPostRepository } from "../IPostRepository";

export class PrismaRepository implements IPostRepository {
  async create({ title, text, imagefile }: ICreatePostDTO): Promise<PostEnity> {
    return await prisma.post.create({
      data: {
        title,
        text,
        imagefile,
      },
    });
  }

  async findById(id: string): Promise<PostEnity | null> {
    return await prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<PostEnity[]> {
    return await prisma.post.findMany();
  }

  async update({
    id,
    title,
    text,
    imagefile,
  }: IUpdatePostDTO): Promise<PostEnity> {
    return await prisma.post.update({
      where: { id },
      data: {
        title,
        text,
        imagefile,
      },
    });
  }

  async delete(id: string) {
    await prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
