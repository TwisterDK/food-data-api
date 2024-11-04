import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Cutout } from "../entity/Cutouts.entity";
import { BaseController } from "./base.controller";

export class CutoutController extends BaseController {
    static async getAllCutouts(req: Request, res: Response) {
    const cutoutsRepository = AppDataSource.getRepository(Cutout);
    return BaseController.getAll(req, res, cutoutsRepository, "cutouts");
  }

  static async createCutout(req: Request, res: Response) {
    const cutoutsRepository = AppDataSource.getRepository(Cutout);
    return BaseController.create(req, res, cutoutsRepository, Cutout);
  }

  static async updateCutout(req: Request, res: Response) {
    const cutoutsRepository = AppDataSource.getRepository(Cutout);
    return BaseController.update(req, res, cutoutsRepository, Cutout);
  }

  static async deleteCutout(req: Request, res: Response) {
    const cutoutsRepository = AppDataSource.getRepository(Cutout);
    return BaseController.delete(req, res, cutoutsRepository);
  }
}
