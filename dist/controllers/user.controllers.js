"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var data_source_1 = require("../data-source");
var User_entity_1 = require("../entity/User.entity");
var encrypt_1 = require("../helpers/encrypt");
var cache = require("memory-cache");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.signup = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, password, role, encryptedPassword, user, userRepository, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, password = _a.password, role = _a.role;
                        return [4 /*yield*/, encrypt_1.encrypt.encryptpass(password)];
                    case 1:
                        encryptedPassword = _b.sent();
                        user = new User_entity_1.User();
                        user.name = name;
                        user.email = email;
                        user.password = encryptedPassword;
                        user.role = role;
                        userRepository = data_source_1.AppDataSource.getRepository(User_entity_1.User);
                        return [4 /*yield*/, userRepository.save(user)];
                    case 2:
                        _b.sent();
                        token = encrypt_1.encrypt.generateToken({ id: user.id });
                        return [2 /*return*/, res
                                .status(200)
                                .json({ message: "User created successfully", token: token, user: user })];
                }
            });
        });
    };
    UserController.getUsers = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, userRepository, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = cache.get("data");
                        if (!data) return [3 /*break*/, 1];
                        console.log("serving from cache");
                        return [2 /*return*/, res.status(200).json({
                                data: data,
                            })];
                    case 1:
                        console.log("serving from db");
                        userRepository = data_source_1.AppDataSource.getRepository(User_entity_1.User);
                        return [4 /*yield*/, userRepository.find()];
                    case 2:
                        users = _a.sent();
                        cache.put("data", users, 6000);
                        return [2 /*return*/, res.status(200).json({
                                data: users,
                            })];
                }
            });
        });
    };
    UserController.updateUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, name, email, userRepository, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        _a = req.body, name = _a.name, email = _a.email;
                        userRepository = data_source_1.AppDataSource.getRepository(User_entity_1.User);
                        return [4 /*yield*/, userRepository.findOne({
                                where: { id: id },
                            })];
                    case 1:
                        user = _b.sent();
                        user.name = name;
                        user.email = email;
                        return [4 /*yield*/, userRepository.save(user)];
                    case 2:
                        _b.sent();
                        res.status(200).json({ message: "update", user: user });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.deleteUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, userRepository, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        userRepository = data_source_1.AppDataSource.getRepository(User_entity_1.User);
                        return [4 /*yield*/, userRepository.findOne({
                                where: { id: id },
                            })];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, userRepository.remove(user)];
                    case 2:
                        _a.sent();
                        res.status(200).json({ message: "ok" });
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.controllers.js.map