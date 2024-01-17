import { PrismaRepository } from "../../repositories/implementations/PrismaRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { EditPostController } from "./edit-post-controller";
import { EditPostUseCase } from "./edit-post-usecase";
import { EditUserController } from "./edit-user-controller";
import { EditUserUseCase } from "./edit-user-usecase";

const prismaRepository = new PrismaRepository();

const editPostUseCase = new EditPostUseCase(prismaRepository);

const editPostController = new EditPostController(editPostUseCase);

const userRepository = new UserRepository();

const editUserUseCase = new EditUserUseCase(userRepository);

const editUserController = new EditUserController(editUserUseCase);

export {
    editPostUseCase,
    editPostController,
    editUserUseCase,
    editUserController
}