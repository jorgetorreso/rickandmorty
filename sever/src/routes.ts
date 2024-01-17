import { request, response, Router } from "express";
import { createPostController, createUserController } from "./modules/create";
import { deletePostController, deleteUserController } from "./modules/delete";
import { editPostController, editUserController } from "./modules/edit";
import { findAllPostsController, findAllUsersController } from "./modules/read/find-all";

const router = Router();

router.post("/create/post", async (request, response) => {
  return createPostController.handle(request, response);
});

router.get("/find-all-posts", async (request, response) => {
  return findAllPostsController.handle(request, response);
});

router.put("/edit/post/:id", async (request, response) => {
  return editPostController.handle(request, response);
});

router.delete("/delete/post/:id", async (request, response) => {
  return deletePostController.handle(request, response);
});

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

export { router };
