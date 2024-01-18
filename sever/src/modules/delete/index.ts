import { FavoriteRepository } from "../../repositories/implementations/FavoriteRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { DeleteFavoriteController } from "./delete-favorite-controller";
import { DeleteFavoriteUseCase } from "./delete-favorite-usecase";
import { DeleteUserController } from "./delete-user-controller";
import { DeleteUserUseCase } from "./delete-user-usecase";


// User

const userRepository = new UserRepository();

const deleteUserUseCase = new DeleteUserUseCase(userRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

// Favorite

const favoriteRepository = new FavoriteRepository();

const deleteFavoriteUseCase = new DeleteFavoriteUseCase(favoriteRepository);

const deleteFavoriteController = new DeleteFavoriteController(deleteFavoriteUseCase);

export { deleteUserUseCase, deleteUserController, deleteFavoriteUseCase, deleteFavoriteController }

