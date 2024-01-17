import { IUpdateUserDTO } from "../modules/edit/IUpdateUserDTO";
import { ICreateUserDTO } from "../modules/create/ICreateUserDTO";
import { UserEntity } from "../entities/User";

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<UserEntity>;
  findById(id: string): Promise<UserEntity | null>;
  findAll(): Promise<UserEntity[]>;
  update(data: IUpdateUserDTO): Promise<UserEntity>;
  delete(id: string): Promise<void>;
}
