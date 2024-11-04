import * as express from "express";
import { authentification } from "../middleware/authentification";
import { ProduceController } from "../controllers/produce.controllers";
import { authorization } from "../middleware/authorization";

const Router = express.Router();

Router.get("/", authentification, ProduceController.getAllProduce);
Router.post("/", authentification, ProduceController.createProduce);

Router.put(
  "/:id",
  authentification,
  authorization(["admin"]),
  ProduceController.updateProduce
);
Router.delete(
  "/:id",
  authentification,
  authorization(["admin"]),
  ProduceController.deleteProduce
);
export { Router as ProduceRouter };
