"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express = require("express");
var authentification_1 = require("../middleware/authentification");
var user_controllers_1 = require("../controllers/user.controllers");
var authorization_1 = require("../middleware/authorization");
var auth_controller_1 = require("../controllers/auth.controller");
var Router = express.Router();
exports.userRouter = Router;
// Middleware for logging requests  //DEBUG - to be removed
Router.use(function (req, res, next) {
    console.log("Incoming Request: ".concat(req.method, " ").concat(req.originalUrl));
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    console.log("Params:", req.params);
    console.log("Query:", req.query);
    next();
});
Router.get("/users", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), user_controllers_1.UserController.getUsers);
Router.get("/profile", authentification_1.authentification, (0, authorization_1.authorization)(["user", "admin"]), auth_controller_1.AuthController.getProfile);
Router.post("/signup", user_controllers_1.UserController.signup);
Router.post("/login", auth_controller_1.AuthController.login);
Router.put("/update/:id", authentification_1.authentification, (0, authorization_1.authorization)(["user", "admin"]), user_controllers_1.UserController.updateUser);
Router.delete("/delete/:id", authentification_1.authentification, (0, authorization_1.authorization)(["admin"]), user_controllers_1.UserController.deleteUser);
//# sourceMappingURL=user.routes.js.map