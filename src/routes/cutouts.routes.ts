import * as express from "express";
import { authentification } from "../middleware/authentification";
import { CutoutController } from "../controllers/cutouts.controller";
import { authorization } from "../middleware/authorization";

const Router = express.Router();

Router.get("/", authentification, CutoutController.getAllCutouts);
Router.post("/", authentification, CutoutController.createCutout);

Router.put(
  "/:id",
  authentification,
  authorization(["admin"]),
  CutoutController.updateCutout
);
Router.delete(
  "/:id",
  authentification,
  authorization(["admin"]),
  CutoutController.deleteCutout
);
export { Router as CutoutRouter };
