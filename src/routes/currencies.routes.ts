import * as express from "express";
import { authentification } from "../middleware/authentification";
import { CurrenciesController } from "../controllers/currencies.controller";
import { authorization } from "../middleware/authorization";

const Router = express.Router();

Router.get("/", authentification, CurrenciesController.getAllCurrencies);
Router.post("/", authentification, CurrenciesController.createCurrency);

Router.put(
  "/:id",
  authentification,
  authorization(["admin"]),
  CurrenciesController.updateCurrency);
Router.delete(
  "/:id",
  authentification,
  authorization(["admin"]),
  CurrenciesController.deleteCurrency);
export { Router as CurrencyRouter };
