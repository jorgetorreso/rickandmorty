import { PrismaRepository } from "../../../repositories/implementations/PrismaRepository";
import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { FindAllCharactersController } from "./find-all-characters-controller";
import { FindAllCharactersUseCase } from "./find-all-characters-usecase";
import { FindAllPostsController } from "./find-all-posts-controller";
import { FindAllPostsUseCase } from "./find-all-posts-usecase";
import { FindAllUsersController } from "./find-all-users-controller";
import { FindAllUsersUseCase } from "./find-all-users-usecase";
import { RickAndMortyApi } from "../../../adapters/externalApi/RickAndMortyApi";
import { FavoriteRepository } from "../../../repositories/implementations/FavoriteRepository";

const prismaRepository = new PrismaRepository();

const findAllPostsUseCase = new FindAllPostsUseCase(prismaRepository);

const findAllPostsController = new FindAllPostsController(findAllPostsUseCase);

// user

const userRepository = new UserRepository();

const findAllUsersUseCase = new FindAllUsersUseCase(userRepository);

const findAllUsersController = new FindAllUsersController(findAllUsersUseCase);

// Favorite 

const favoriteRepository = new FavoriteRepository();

// Character 

const rickAndMortyApi = new RickAndMortyApi();

const findAllCharactersUseCase = new FindAllCharactersUseCase(rickAndMortyApi, favoriteRepository);

const findAllCharactersController = new FindAllCharactersController(findAllCharactersUseCase);

export {
    findAllPostsUseCase,
    findAllPostsController,
    findAllUsersUseCase,
    findAllUsersController,
    findAllCharactersUseCase,
    findAllCharactersController
}