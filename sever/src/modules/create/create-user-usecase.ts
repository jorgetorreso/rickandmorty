import { UserEntity } from "../../entities/User";
import { handleError } from "../../handles/errors/handleError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface ICreateUserRequest {
}

export class CreateUserUseCase {
  constructor(private postRepository: IUserRepository) { }

  async execute({ }: ICreateUserRequest): Promise<UserEntity> {

    return await this.postRepository.create({})
  }
}