import { FavoriteRepository } from "../../repositories/implementations/FavoriteRepository";
import { PrismaRepository } from "../../repositories/implementations/PrismaRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateFavoriteController } from "./create-favorite-controller";
import { CreateFavoriteUseCase } from "./create-favorite-usecase";
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

// favorite

const favoriteRepository = new FavoriteRepository();

const createFavoriteUseCase = new CreateFavoriteUseCase(favoriteRepository);

const createFavoriteController = new CreateFavoriteController(createFavoriteUseCase);


export {
    createPostUseCase,
    createPostController,
    createUserUseCase,
    createUserController,
    createFavoriteUseCase,
    createFavoriteController
}