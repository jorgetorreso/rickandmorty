import { UserEntity } from "../../entities/User";
import { handleError } from "../../handles/errors/handleError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IEditUserRequest {
  readonly id: string;
}

export class EditUserUseCase {
  constructor(private userRepository: IUserRepository) { }

  async execute({ id }: IEditUserRequest): Promise<UserEntity> {
    const checkID = await this.userRepository.findById(id);

    if (checkID === null) {
      throw new handleError("Not found!", 404);
    }

    return await this.userRepository.update({
      id
    })
  }
}