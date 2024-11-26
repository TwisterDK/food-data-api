"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitOfMeasureRouter = void 0;
var express = require("express");
var authentification_1 = require("../middleware/authentification");
var authorization_1 = require("../middleware/authorization");
var unitofmeasure_controller_1 = require("../controllers/unitofmeasure.controller");
var Router = express.Router();
exports.UnitOfMeasureRouter = Router;
Router.get("/", authentification_1.authentification, unitofmeasure_controller_1.UnitOfMeasureController.getAllUnitOfMeasure);
Router.post("/", authentification_1.authentification, unitofmeasure_controller_1.UnitOfMeasureController.createUnitOfMeasure);
Router.put("/:id", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), unitofmeasure_controller_1.UnitOfMeasureController.updateUnitOfMeasure);
Router.delete("/:id", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), unitofmeasure_controller_1.UnitOfMeasureController.deleteUnitOfMeasure);
//# sourceMappingURL=unitofmeasure.routes.js.map