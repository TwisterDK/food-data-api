import { Request, Response } from "express";
import * as cache from "memory-cache";
import { AppDataSource } from "../data-source";
import { Category } from "../entity/Categories.entity";

export class MovieController {
  static async getAllCategories(req: Request, res: Response) {
    const data = cache.get("data");
    if (data) {
      console.log("serving from cache");
      return res.status(200).json({
        data,
      });
    } else {
      console.log("serving from db");
      const categoriesRepository = AppDataSource.getRepository(Category);
      const categories = await categoriesRepository.find();
      cache.put("data", categories, 10000);
      return res.status(200).json({
        data: categories,
      });
    }
  }
  static async createCategory(req: Request, res: Response) {
    const { type } =
      req.body;
    const category = new Category();
    category.Type = type;
    const categoriesRepository = AppDataSource.getRepository(Category);
    await categoriesRepository.save(category);
    return res
      .status(200)
      .json({ message: "Category created successfully", category });
  }

  static async updateCategory(req: Request, res: Response) {
    const { id } = req.params;
    const { type } =
      req.body;
    const categoryRepository = AppDataSource.getRepository(Category);
    const category = await categoryRepository.findOne({
      where: { ID },
    });
    category.Type = type;
    await categoryRepository.save(category);
    return res
      .status(200)
      .json({ message: "Category updated successfully", category });
  }

  static async deleteCategory(req: Request, res: Response) {
    const { id } = req.params;
    const categoryRepository = AppDataSource.getRepository(Category);
    const category = await categoryRepository.findOne({
      where: { ID },
    });
    await categoryRepository.remove(category);
    return res
      .status(200)
      .json({ message: "Category deleted successfully", category });
  }
}
