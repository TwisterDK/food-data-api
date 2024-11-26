"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionFactorRouter = void 0;
var express = require("express");
var authentification_1 = require("../middleware/authentification");
var conversionfactors_controller_1 = require("../controllers/conversionfactors.controller");
var authorization_1 = require("../middleware/authorization");
var Router = express.Router();
exports.ConversionFactorRouter = Router;
Router.get("/", authentification_1.authentification, conversionfactors_controller_1.ConversionFactorController.getAllConversionFactors);
Router.post("/", authentification_1.authentification, conversionfactors_controller_1.ConversionFactorController.createConversionFactor);
Router.put("/:id", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), conversionfactors_controller_1.ConversionFactorController.updateConversionFactor);
Router.delete("/:id", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), conversionfactors_controller_1.ConversionFactorController.deleteConversionFactor);
//# sourceMappingURL=conversionfactors.router.js.map