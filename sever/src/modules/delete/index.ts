import { PrismaRepository } from "../../repositories/implementations/PrismaRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { DeletePostController } from "./delete-post-controller";
import { DeletePostUseCase } from "./delete-post-usecase";


const prismaRepository = new PrismaRepository();

const deletePostUseCase = new DeletePostUseCase(prismaRepository);

const deletePostController = new DeletePostController(deletePostUseCase);

// User

const userRepository = new UserRepository();

const deleteUserUseCase = new DeletePostUseCase(userRepository);

const deleteUserController = new DeletePostController(deleteUserUseCase);

export { deletePostUseCase, deletePostController, deleteUserUseCase, deleteUserController }