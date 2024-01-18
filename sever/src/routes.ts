import { Router } from "express";
import { createFavoriteController, createUserController } from "./modules/create";
import { deleteFavoriteController, deleteUserController } from "./modules/delete";
import { editUserController } from "./modules/edit";
import { findAllCharactersController, findAllUsersController } from "./modules/read/find-all";

const router = Router();

// User

router.post("/create/user", async (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/find-all-users", async (request, response) => {
  return findAllUsersController.handle(request, response);
});

router.put("/edit/user/:id", async (request, response) => {
  return editUserController.handle(request, response);
});

router.delete("/delete/user/:id", async (request, response) => {
  return deleteUserController.handle(request, response);
});

// Favorite 

router.post("/add-favorite", async (request, response) => {
  return createFavoriteController.handle(request, response);
});

router.post("/remove-favorite", async (request, response) => {
  return deleteFavoriteController.handle(request, response);
});

// Character

router.get("/find-all-characters", async (request, response) => {
  return findAllCharactersController.handle(request, response);
});


export { router };
