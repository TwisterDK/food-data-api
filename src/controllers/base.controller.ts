import { Request, Response } from "express";
import * as cache from "memory-cache";
import { Repository } from "typeorm";

export class BaseController {
  // static async getAll(req: Request, res: Response, repository: Repository<any>, cacheKey: string) {
  //   // console.log("getAll called");            //Debug line
  //   // console.log("Repository:", repository);  //Debug line
  //   // console.log("Cache key:", cacheKey);     //Debug line
  //   const data = cache.get(cacheKey);
  //   if (data) {
  //     console.log("serving from cache");
  //     return res.status(200).json({ data });
  //   } else {
  //     console.log("serving from db");
  //     const items = await repository.find();
  //     cache.put(cacheKey, items, 10000);
  //     return res.status(200).json({ data: items });
  //   }
  // }

  static async getAll(req: Request, res: Response, repository: Repository<any>, cacheKey: string, relations: string[] = []) {
    const data = cache.get(cacheKey);
    if (data) {
      console.log("Serving from cache");
      return res.status(200).json({ data });
    } else {
      console.log("Serving from DB");

      // Just fetch the data with the relations, no specific select options here
      const items = await repository.find({
        relations, // Use the relations passed from the controller
      });

      cache.put(cacheKey, items, 10000);
      return res.status(200).json({ data: items });
    }
  }
  static async create(req: Request, res: Response, repository: Repository<any>, entity: any) {
    try {
      const item = repository.create(req.body);
      await repository.save(item);
      return res.status(200).json({ message: "Item created successfully", item });
    } catch (error) {
      console.error("Error creating item:", error);
      return res.status(500).json({ message: "Failed to create item", error });
    }
  }

  static async update(req: Request, res: Response, repository: Repository<any>, entity: any) {
    try {
      const { id } = req.params;
      const item = await repository.findOne({ where: { id } });
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      Object.assign(item, req.body);
      await repository.save(item);
      return res.status(200).json({ message: "Item updated successfully", item });
    } catch (error) {
      console.error("Error updating item:", error);
      return res.status(500).json({ message: "Failed to update item", error });
    }
  }

  static async delete(req: Request, res: Response, repository: Repository<any>) {
    try {
      const { id } = req.params;
      const item = await repository.findOne({ where: { id } });
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      await repository.remove(item);
      return res.status(200).json({ message: "Item deleted successfully", item });
    } catch (error) {
      console.error("Error deleting item:", error);
      return res.status(500).json({ message: "Failed to delete item", error });
    }
  }
}
