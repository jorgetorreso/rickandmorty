import { PrismaRepository } from "../../../repositories/implementations/PrismaRepository";
import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { FindAllPostsController } from "./find-all-posts-controller";
import { FindAllPostsUseCase } from "./find-all-posts-usecase";
import { FindAllUsersController } from "./find-all-users-controller";
import { FindAllUsersUseCase } from "./find-all-users-usecase";

const prismaRepository = new PrismaRepository();

const findAllPostsUseCase = new FindAllPostsUseCase(prismaRepository);

const findAllPostsController = new FindAllPostsController(findAllPostsUseCase);

// user

const userRepository = new UserRepository();

const findAllUsersUseCase = new FindAllUsersUseCase(userRepository);

const findAllUsersController = new FindAllUsersController(findAllUsersUseCase);

export { findAllPostsUseCase, findAllPostsController, findAllUsersUseCase, findAllUsersController }