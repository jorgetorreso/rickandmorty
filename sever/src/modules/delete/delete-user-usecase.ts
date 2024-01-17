import { handleError } from "../../handles/errors/handleError";
import { IUserRepository } from "../../repositories/IUserRepository";

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) { }

  async execute(id: string): Promise<void> {
    const checkID = await this.userRepository.findById(id);

    if (checkID === null) {
      throw new handleError("Not found!", 404);
    }

    return await this.userRepository.delete(id);
  }
}