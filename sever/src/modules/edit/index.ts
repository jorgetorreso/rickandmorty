import { UserRepository } from "../../repositories/implementations/UserRepository";
import { EditUserController } from "./edit-user-controller";
import { EditUserUseCase } from "./edit-user-usecase";

const userRepository = new UserRepository();

const editUserUseCase = new EditUserUseCase(userRepository);

const editUserController = new EditUserController(editUserUseCase);

export { editUserUseCase, editUserController };
