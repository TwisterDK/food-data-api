"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRouter = void 0;
var express = require("express");
var authentification_1 = require("../middleware/authentification");
var categories_controllers_1 = require("../controllers/categories.controllers");
var authorization_1 = require("../middleware/authorization");
var Router = express.Router();
exports.CategoryRouter = Router;
// Middleware for logging requests  //DEBUG - to be removed
Router.use(function (req, res, next) {
    console.log("Incoming Request: ".concat(req.method, " ").concat(req.originalUrl));
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    console.log("Params:", req.params);
    console.log("Query:", req.query);
    next();
});
Router.get("/", authentification_1.authentification, categories_controllers_1.CategoryController.getAllCategories);
Router.post("/", authentification_1.authentification, categories_controllers_1.CategoryController.createCategory);
Router.put("/:id", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), categories_controllers_1.CategoryController.updateCategory);
Router.delete("/:id", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), categories_controllers_1.CategoryController.deleteCategory);
//# sourceMappingURL=categories.routes.js.map