"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduceRouter = void 0;
var express = require("express");
var authentification_1 = require("../middleware/authentification");
var produce_controllers_1 = require("../controllers/produce.controllers");
var authorization_1 = require("../middleware/authorization");
var Router = express.Router();
exports.ProduceRouter = Router;
Router.get("/", authentification_1.authentification, produce_controllers_1.ProduceController.getAllProduce);
Router.post("/", authentification_1.authentification, produce_controllers_1.ProduceController.createProduce);
Router.put("/:id", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), produce_controllers_1.ProduceController.updateProduce);
Router.delete("/:id", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), produce_controllers_1.ProduceController.deleteProduce);
//# sourceMappingURL=produce.routes.js.map