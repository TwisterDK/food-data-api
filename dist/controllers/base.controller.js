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
exports.BaseController = void 0;
var cache = require("memory-cache");
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    // static async getAll(req: Request, res: Response, repository: Repository<any>, cacheKey: string) {
    //   // console.log("getAll called");            //Debug line
    //   // console.log("Repository:", repository);  //Debug line
    //   // console.log("Cache key:", cacheKey);     //Debug line
    //   const data = cache.get(cacheKey);
    //   if (data) {
    //     console.log("serving from cache");
    //     return res.status(200).json({ data });
    //   } else {
    //     console.log("serving from db");
    //     const items = await repository.find();
    //     cache.put(cacheKey, items, 10000);
    //     return res.status(200).json({ data: items });
    //   }
    // }
    BaseController.getAll = function (req, res, repository, cacheKey, relations) {
        if (relations === void 0) { relations = []; }
        return __awaiter(this, void 0, void 0, function () {
            var data, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = cache.get(cacheKey);
                        if (!data) return [3 /*break*/, 1];
                        console.log("Serving from cache");
                        return [2 /*return*/, res.status(200).json({ data: data })];
                    case 1:
                        console.log("Serving from DB");
                        return [4 /*yield*/, repository.find({
                                relations: relations,
                            })];
                    case 2:
                        items = _a.sent();
                        cache.put(cacheKey, items, 10000);
                        return [2 /*return*/, res.status(200).json({ data: items })];
                }
            });
        });
    };
    BaseController.create = function (req, res, repository, entity) {
        return __awaiter(this, void 0, void 0, function () {
            var item, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        item = repository.create(req.body);
                        return [4 /*yield*/, repository.save(item)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Item created successfully", item: item })];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Error creating item:", error_1);
                        return [2 /*return*/, res.status(500).json({ message: "Failed to create item", error: error_1 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BaseController.update = function (req, res, repository, entity) {
        return __awaiter(this, void 0, void 0, function () {
            var id, item, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        id = req.params.id;
                        return [4 /*yield*/, repository.findOne({ where: { id: id } })];
                    case 1:
                        item = _a.sent();
                        if (!item) {
                            return [2 /*return*/, res.status(404).json({ message: "Item not found" })];
                        }
                        Object.assign(item, req.body);
                        return [4 /*yield*/, repository.save(item)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Item updated successfully", item: item })];
                    case 3:
                        error_2 = _a.sent();
                        console.error("Error updating item:", error_2);
                        return [2 /*return*/, res.status(500).json({ message: "Failed to update item", error: error_2 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BaseController.delete = function (req, res, repository) {
        return __awaiter(this, void 0, void 0, function () {
            var id, item, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        id = req.params.id;
                        return [4 /*yield*/, repository.findOne({ where: { id: id } })];
                    case 1:
                        item = _a.sent();
                        if (!item) {
                            return [2 /*return*/, res.status(404).json({ message: "Item not found" })];
                        }
                        return [4 /*yield*/, repository.remove(item)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Item deleted successfully", item: item })];
                    case 3:
                        error_3 = _a.sent();
                        console.error("Error deleting item:", error_3);
                        return [2 /*return*/, res.status(500).json({ message: "Failed to delete item", error: error_3 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return BaseController;
}());
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map