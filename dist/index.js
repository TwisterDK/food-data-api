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
var data_source_1 = require("./data-source");
var express = require("express");
var dotenv = require("dotenv");
var cors = require("cors");
var user_routes_1 = require("./routes/user.routes");
require("reflect-metadata");
var errorHandler_1 = require("./middleware/errorHandler");
var categories_routes_1 = require("./routes/categories.routes");
var cutouts_routes_1 = require("./routes/cutouts.routes");
var currencies_routes_1 = require("./routes/currencies.routes");
var produce_routes_1 = require("./routes/produce.routes");
var unitofmeasure_routes_1 = require("./routes/unitofmeasure.routes");
var conversionfactors_router_1 = require("./routes/conversionfactors.router");
dotenv.config();
var app = express();
// Determine the origin for CORS dynamically based on the environment
var allowedOrigins = [
    'http://localhost:3000',
    'http://foodstack-react-frontend:80',
    'http://192.168.1.66',
    'http://foodstack-react-frontend',
    'http://twisterdk.duckdns.org',
    'http://twisterdk.duckdns.org:19200', // DYNDNS name    
];
app.use(cors({
    origin: function (origin, callback) {
        // Check if the request's origin matches one of the allowed origins
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            // Log the origin that caused the error
            console.error("CORS error: Request from origin ".concat(origin, " is not allowed."));
            callback(new Error("CORS not allowed by the API for origin: ".concat(origin))); // Reject the request with an error
        }
    },
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, // Allow credentials like cookies if needed
}));
app.use(express.json());
var _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;
app.use(errorHandler_1.errorHandler);
app.use("/auth", user_routes_1.userRouter);
app.use("/api/categories", categories_routes_1.CategoryRouter);
app.use("/api/currencies", currencies_routes_1.CurrencyRouter);
app.use("/api/cutouts", cutouts_routes_1.CutoutRouter);
app.use("/api/produce", produce_routes_1.ProduceRouter);
app.use("/api/unitofmeasure", unitofmeasure_routes_1.UnitOfMeasureRouter);
app.use("/api/conversionfactors", conversionfactors_router_1.ConversionFactorRouter);
app.get("*", function (req, res) {
    res.status(505).json({ message: "Bad Request" });
});
data_source_1.AppDataSource.initialize()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        app.listen(PORT, function () {
            console.log("Server is running on http://localhost:" + PORT);
        });
        console.log("Data Source has been initialized!");
        return [2 /*return*/];
    });
}); })
    .catch(function (error) { return console.log(error); });
// import { AppDataSource } from "./data-source";
// import * as express from "express";
// import * as dotenv from "dotenv";
// import * as cors from 'cors'
// import { Request, Response } from "express";
// import { userRouter } from "./routes/user.routes";
// import "reflect-metadata";
// import { errorHandler } from "./middleware/errorHandler";
// import { CategoryRouter } from "./routes/categories.routes";
// import { CutoutRouter } from "./routes/cutouts.routes";
// import { CurrencyRouter } from "./routes/currencies.routes";
// import { ProduceRouter } from "./routes/produce.routes";
// import { UnitOfMeasureRouter } from "./routes/unitofmeasure.routes";
// import { ConversionFactorRouter } from "./routes/conversionfactors.router";
// dotenv.config();
// const app = express();
// // Enable CORS for all routes
// app.use(cors({
//   origin: 'http://localhost:3000', // Allow only your React app's origin
//   methods: 'GET,POST,PUT,DELETE',  // Specify allowed methods
//   credentials: true,               // Include this if your requests use credentials (e.g., cookies)
// }));
// app.use(express.json());
// const { PORT = 3000 } = process.env;
// app.use(errorHandler);
// app.use("/auth", userRouter);
// app.use("/api/categories", CategoryRouter);
// app.use("/api/currencies", CurrencyRouter);
// app.use("/api/cutouts", CutoutRouter);
// app.use("/api/produce", ProduceRouter);
// app.use("/api/unitofmeasure", UnitOfMeasureRouter);
// app.use("/api/conversionfactors", ConversionFactorRouter);
// app.get("*", (req: Request, res: Response) => {
//   res.status(505).json({ message: "Bad Request" });
// });
// AppDataSource.initialize()
//   .then(async () => {
//     app.listen(PORT, () => {
//       console.log("Server is running on http://localhost:" + PORT);
//     });
//     console.log("Data Source has been initialized!");
//   })
//   .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map