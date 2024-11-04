import * as express from "express";
import { authentification } from "../middleware/authentification";
import { authorization } from "../middleware/authorization";
import { UnitOfMeasureController } from "../controllers/unitofmeasure.controller";

const Router = express.Router();

Router.get("/", authentification, UnitOfMeasureController.getAllUnitOfMeasure);
Router.post("/", authentification, UnitOfMeasureController.createUnitOfMeasure);

Router.put(
  "/:id",
  authentification,
  authorization(["admin"]),
  UnitOfMeasureController.updateUnitOfMeasure
);
Router.delete(
  "/:id",
  authentification,
  authorization(["admin"]),
  UnitOfMeasureController.deleteUnitOfMeasure
);
export { Router as UnitOfMeasureRouter };
