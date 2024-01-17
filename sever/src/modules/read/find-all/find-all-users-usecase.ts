import { UserEntity } from "../../../entities/User";
import { handleError } from "../../../handles/errors/handleError";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class FindAllUsersUseCase {
  constructor(private userRepository: IUserRepository) { }

  async execute(): Promise<UserEntity[]> {
    const findAll = await this.userRepository.findAll();

    if (findAll.length === 0) {
      throw new handleError("Not found", 404);
    }

    return findAll;
  }
}