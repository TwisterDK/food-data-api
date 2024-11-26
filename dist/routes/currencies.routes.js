"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRouter = void 0;
var express = require("express");
var authentification_1 = require("../middleware/authentification");
var currencies_controller_1 = require("../controllers/currencies.controller");
var authorization_1 = require("../middleware/authorization");
var Router = express.Router();
exports.CurrencyRouter = Router;
Router.get("/", authentification_1.authentification, currencies_controller_1.CurrenciesController.getAllCurrencies);
Router.post("/", authentification_1.authentification, currencies_controller_1.CurrenciesController.createCurrency);
Router.put("/:id", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), currencies_controller_1.CurrenciesController.updateCurrency);
Router.delete("/:id", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), currencies_controller_1.CurrenciesController.deleteCurrency);
//# sourceMappingURL=currencies.routes.js.map