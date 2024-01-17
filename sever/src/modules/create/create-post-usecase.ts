import { PostEnity } from "../../entities/Post";
import { handleError } from "../../handles/errors/handleError";
import { IPostRepository } from "../../repositories/IPostRepository";

interface ICreatePostRequest {
  title: string;
  text: string;
  imagefile?: string;
}

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) { }

  async execute({ title, text, imagefile }: ICreatePostRequest): Promise<PostEnity> {

    if (imagefile && !imagefile.startsWith('data:image/png;base64')) {
      throw new handleError('Invalid file format.', 415);
    }

    return await this.postRepository.create({
      title,
      text,
      imagefile
    })
  }
}