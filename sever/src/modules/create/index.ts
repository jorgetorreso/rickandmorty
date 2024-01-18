import { FavoriteRepository } from "../../repositories/implementations/FavoriteRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateFavoriteController } from "./create-favorite-controller";
import { CreateFavoriteUseCase } from "./create-favorite-usecase";
import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-usecase";

// User

const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(createUserUseCase);

// favorite

const favoriteRepository = new FavoriteRepository();

const createFavoriteUseCase = new CreateFavoriteUseCase(favoriteRepository);

const createFavoriteController = new CreateFavoriteController(createFavoriteUseCase);


export {
    createUserUseCase,
    createUserController,
    createFavoriteUseCase,
    createFavoriteController
}