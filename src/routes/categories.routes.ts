import * as express from "express";
import { authentification } from "../middleware/authentification";
import { CategoryController } from "../controllers/categories.controllers";
import { authorization } from "../middleware/authorization";

const Router = express.Router();

// Middleware for logging requests  //DEBUG - to be removed
Router.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.originalUrl}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  console.log("Params:", req.params);
  console.log("Query:", req.query);
  next();
});

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
