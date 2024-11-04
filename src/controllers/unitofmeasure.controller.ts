import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { BaseController } from "./base.controller";
import { UnitOfMeasure } from "../entity/UnitOfMeasure.entity";

export class UnitOfMeasureController extends BaseController {
    static async getAllUnitOfMeasure(req: Request, res: Response) {
    const unitOfMeasureRepository = AppDataSource.getRepository(UnitOfMeasure);
    return BaseController.getAll(req, res, unitOfMeasureRepository, "unitofmeasure");
  }

  static async createUnitOfMeasure(req: Request, res: Response) {
    const unitOfMeasureRepository = AppDataSource.getRepository(UnitOfMeasure);
    return BaseController.create(req, res, unitOfMeasureRepository, UnitOfMeasure);
  }

  static async updateUnitOfMeasure(req: Request, res: Response) {
    const unitOfMeasureRepository = AppDataSource.getRepository(UnitOfMeasure);
    return BaseController.update(req, res, unitOfMeasureRepository, UnitOfMeasure);
  }

  static async deleteUnitOfMeasure(req: Request, res: Response) {
    const unitOfMeasureRepository = AppDataSource.getRepository(UnitOfMeasure);
    return BaseController.delete(req, res, unitOfMeasureRepository);
  }
}
