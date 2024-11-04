import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { ConversionFactor } from "../entity/ConversionFactors.entity";
import { BaseController } from "./base.controller";

export class ConversionFactorController extends BaseController {
    static async getAllConversionFactors(req: Request, res: Response) {
    const conversionFactorsRepository = AppDataSource.getRepository(ConversionFactor);
    return BaseController.getAll(req, res, conversionFactorsRepository, "conversionfactors");
  }

  static async createConversionFactor(req: Request, res: Response) {
    const conversionFactorsRepository = AppDataSource.getRepository(ConversionFactor);
    return BaseController.create(req, res, conversionFactorsRepository, ConversionFactor);
  }

  static async updateConversionFactor(req: Request, res: Response) {
    const conversionFactorsRepository = AppDataSource.getRepository(ConversionFactor);
    return BaseController.update(req, res, conversionFactorsRepository, ConversionFactor);
  }

  static async deleteConversionFactor(req: Request, res: Response) {
    const conversionFactorsRepository = AppDataSource.getRepository(ConversionFactor);
    return BaseController.delete(req, res, conversionFactorsRepository);
  }
}