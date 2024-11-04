import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { BaseController } from "./base.controller";
import { Category } from "../entity/Categories.entity";

export class CategoryController extends BaseController {
    static async getAllCategories(req: Request, res: Response) {
    const categoriesRepository = AppDataSource.getRepository(Category);
    return BaseController.getAll(req, res, categoriesRepository, "categories");
  }

  static async createCategory(req: Request, res: Response) {
    const categoriesRepository = AppDataSource.getRepository(Category);
    return BaseController.create(req, res, categoriesRepository, Category);
  }

  static async updateCategory(req: Request, res: Response) {
    const categoriesRepository = AppDataSource.getRepository(Category);
    return BaseController.update(req, res, categoriesRepository, Category);
  }

  static async deleteCategory(req: Request, res: Response) {
    const categoriesRepository = AppDataSource.getRepository(Category);
    return BaseController.delete(req, res, categoriesRepository);
  }
}