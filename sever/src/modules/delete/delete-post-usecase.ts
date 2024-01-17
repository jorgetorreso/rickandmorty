import { handleError } from "../../handles/errors/handleError";
import { IPostRepository } from "../../repositories/IPostRepository";

export class DeletePostUseCase {
  constructor(private postRepository: IPostRepository) { }

  async execute(id: string): Promise<void> {
    const checkID = await this.postRepository.findById(id);

    if (checkID === null) {
      throw new handleError("Not found!", 404);
    }

    return await this.postRepository.delete(id);
  }
}