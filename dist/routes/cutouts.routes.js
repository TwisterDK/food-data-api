"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutoutRouter = void 0;
var express = require("express");
var authentification_1 = require("../middleware/authentification");
var cutouts_controller_1 = require("../controllers/cutouts.controller");
var authorization_1 = require("../middleware/authorization");
var Router = express.Router();
exports.CutoutRouter = Router;
Router.get("/", authentification_1.authentification, cutouts_controller_1.CutoutController.getAllCutouts);
Router.post("/", authentification_1.authentification, cutouts_controller_1.CutoutController.createCutout);
Router.put("/:id", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), cutouts_controller_1.CutoutController.updateCutout);
Router.delete("/:id", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), cutouts_controller_1.CutoutController.deleteCutout);
//# sourceMappingURL=cutouts.routes.js.map