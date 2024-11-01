import * as express from "express";
import { authentification } from "../middleware/authentification";
import { CategoryController } from "../controllers/categories.controllers";
import { authorization } from "../middleware/authorization";

const Router = express.Router();

Router.get("/categories", authentification, CategoryController.getAllCategories);
Router.post("/categories", authentification, CategoryController.createCategory);

Router.put(
  "/categories/:id",
  authentification,
  authorization(["admin"]),
  CategoryController.updateCategory
);
Router.delete(
  "/categories/:id",
  authentification,
  authorization(["admin"]),
  CategoryController.deleteCategory
);
export { Router as CategoryRouter };
