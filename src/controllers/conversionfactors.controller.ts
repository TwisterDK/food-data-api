import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { ConversionFactor } from "../entity/ConversionFactors.entity";
import { BaseController } from "./base.controller";

export class ConversionFactorController extends BaseController {
  //   static async getAllConversionFactors(req: Request, res: Response) {
  //   const conversionFactorsRepository = AppDataSource.getRepository(ConversionFactor);
  //   return BaseController.getAll(req, res, conversionFactorsRepository, "conversionfactors");
  // }

  static async getAllConversionFactors(req: Request, res: Response) {
    const conversionFactorsRepository = AppDataSource.getRepository(ConversionFactor);

    // Define the relations to include in the query
    const relations = ["Category", "Produce", "Cutout"];

    // Define select options for the ConversionFactor entity
    const selectOptions = {
      id: true, // Always include the id of the main entity (ConversionFactor)
      ConversionFactor: true, // Include the ConversionFactor field
      Category: { id: true, name: true }, // Include id and name from Category
      Produce: { id: true, name: true }, // Include id and name from Produce
      Cutout: { id: true, name: true }, // Include id and name from Cutout
    };

    // Fetch the data with the specified select options
    const items = await conversionFactorsRepository.find({
      relations, 
      select: selectOptions, // Pass the select options specific to ConversionFactor
    });

    // Cache and return the data
    return res.status(200).json({ data: items });
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