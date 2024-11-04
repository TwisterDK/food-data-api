import * as express from "express";
import { authentification } from "../middleware/authentification";
import { ConversionFactorController } from "../controllers/conversionfactors.controller";
import { authorization } from "../middleware/authorization";

const Router = express.Router();

Router.get("/", authentification, ConversionFactorController.getAllConversionFactors);
Router.post("/", authentification, ConversionFactorController.createConversionFactor);

Router.put(
  "/:id",
  authentification,
  authorization(["admin"]),
  ConversionFactorController.updateConversionFactor
);
Router.delete(
  "/:id",
  authentification,
  authorization(["admin"]),
  ConversionFactorController.deleteConversionFactor
);
export { Router as ConversionFactorRouter };
