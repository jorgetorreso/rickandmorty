import { PrismaRepository } from "../../repositories/implementations/PrismaRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreatePostController } from "./create-post-controller";
import { CreatePostUseCase } from "./create-post-usecase";
import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-usecase";

const prismaRepository = new PrismaRepository();

const createPostUseCase = new CreatePostUseCase(prismaRepository);

const createPostController = new CreatePostController(createPostUseCase);

// User

const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(createUserUseCase);


export { createPostUseCase, createPostController, createUserUseCase, createUserController }