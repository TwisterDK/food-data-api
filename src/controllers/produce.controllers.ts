import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { BaseController } from "./base.controller";
import { Produce } from "../entity/Produce.entity";

export class ProduceController extends BaseController {
    static async getAllProduce(req: Request, res: Response) {
    const produceRepository = AppDataSource.getRepository(Produce);
    return BaseController.getAll(req, res, produceRepository, "produce");
  }

  static async createProduce(req: Request, res: Response) {
    const produceRepository = AppDataSource.getRepository(Produce);
    return BaseController.create(req, res, produceRepository, Produce);
  }

  static async updateProduce(req: Request, res: Response) {
    const produceRepository = AppDataSource.getRepository(Produce);
    return BaseController.update(req, res, produceRepository, Produce);
  }

  static async deleteProduce(req: Request, res: Response) {
    const produceRepository = AppDataSource.getRepository(Produce);
    return BaseController.delete(req, res, produceRepository);
  }
}
