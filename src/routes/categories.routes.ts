import * as express from "express";
import { authentification } from "../middleware/authentification";
import { CategoryController } from "../controllers/categories.controllers";
import { authorization } from "../middleware/authorization";

const Router = express.Router();

Router.get("/", authentification, CategoryController.getAllCategories);
Router.post("/", authentification, CategoryController.createCategory);

Router.put(
  "/:id",
  authentification,
  authorization(["admin"]),
  CategoryController.updateCategory
);
Router.delete(
  "/:id",
  authentification,
  authorization(["admin"]),
  CategoryController.deleteCategory
);
export { Router as CategoryRouter };
