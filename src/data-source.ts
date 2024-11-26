import "reflect-metadata";
import { DataSource } from "typeorm";

import * as dotenv from "dotenv";
import { Category } from "./entity/Categories.entity";
import { Cutout } from "./entity/Cutouts.entity";
import { Produce } from "./entity/Produce.entity";
import { UnitOfMeasure } from "./entity/UnitOfMeasure.entity";
import { Currency } from "./entity/Currencies.entity";
import { ConversionFactor } from "./entity/ConversionFactors.entity";
import { User } from "./entity/User.entity";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } =
  process.env;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: parseInt(DB_PORT || "3306"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: NODE_ENV === "dev" ? false : false,
  logging: NODE_ENV === "dev" ? false : false,
  entities: [Category, Cutout, Produce, UnitOfMeasure, Currency, ConversionFactor, User],
  migrations: [__dirname + "/migration/*.ts"],
  subscribers: [],
});
