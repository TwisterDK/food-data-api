import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { BaseController } from "./base.controller";
import { Currency } from "../entity/Currencies.entity";

export class CurrenciesController extends BaseController {
    static async getAllCurrencies(req: Request, res: Response) {
    const currenciesRepository = AppDataSource.getRepository(Currency);
    return BaseController.getAll(req, res, currenciesRepository, "currencies");
  }

  static async createCurrency(req: Request, res: Response) {
    const currenciesRepository = AppDataSource.getRepository(Currency);
    return BaseController.create(req, res, currenciesRepository, Currency);
  }

  static async updateCurrency(req: Request, res: Response) {
    const currenciesRepository = AppDataSource.getRepository(Currency);
    return BaseController.update(req, res, currenciesRepository, Currency);
  }

  static async deleteCurrency(req: Request, res: Response) {
    const currenciesRepository = AppDataSource.getRepository(Currency);
    return BaseController.delete(req, res, currenciesRepository);
  }
}
