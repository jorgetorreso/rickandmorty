import { PostEnity } from "../../entities/Post";
import { handleError } from "../../handles/errors/handleError";
import { IPostRepository } from "../../repositories/IPostRepository";

interface IEditPostRequest {
  readonly id: string;
  title: string;
  text: string;
  imagefile?: string;
}

export class EditPostUseCase {
  constructor(private postRepository: IPostRepository) { }

  async execute({ id, title, text, imagefile }: IEditPostRequest): Promise<PostEnity> {
    const checkID = await this.postRepository.findById(id);

    if (checkID === null) {
      throw new handleError("Not found!", 404);
    }

    if (imagefile && !imagefile.startsWith('data:image/png;base64')) {
      throw new handleError('Invalid file format.', 415);
    }

    return await this.postRepository.update({
      id,
      title,
      text,
      imagefile
    })
  }
}