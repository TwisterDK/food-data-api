"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var dotenv = require("dotenv");
var Categories_entity_1 = require("./entity/Categories.entity");
var Cutouts_entity_1 = require("./entity/Cutouts.entity");
var Produce_entity_1 = require("./entity/Produce.entity");
var UnitOfMeasure_entity_1 = require("./entity/UnitOfMeasure.entity");
var Currencies_entity_1 = require("./entity/Currencies.entity");
var ConversionFactors_entity_1 = require("./entity/ConversionFactors.entity");
var User_entity_1 = require("./entity/User.entity");
dotenv.config();
var _a = process.env, DB_HOST = _a.DB_HOST, DB_PORT = _a.DB_PORT, DB_USERNAME = _a.DB_USERNAME, DB_PASSWORD = _a.DB_PASSWORD, DB_DATABASE = _a.DB_DATABASE, NODE_ENV = _a.NODE_ENV;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: DB_HOST,
    port: parseInt(DB_PORT || "3306"),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: NODE_ENV === "dev" ? false : false,
    logging: NODE_ENV === "dev" ? false : false,
    entities: [Categories_entity_1.Category, Cutouts_entity_1.Cutout, Produce_entity_1.Produce, UnitOfMeasure_entity_1.UnitOfMeasure, Currencies_entity_1.Currency, ConversionFactors_entity_1.ConversionFactor, User_entity_1.User],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map