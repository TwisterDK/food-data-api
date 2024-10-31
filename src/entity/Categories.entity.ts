import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { ConversionFactor } from "./ConversionFactors.entity";

@Entity({ name: "Categories" })
@Unique(["Type"])
export class Category {
  @PrimaryGeneratedColumn("uuid")
  ID: string;

  @Column({ type: "nvarchar", length: 50 })
  Type: string;
  
  @OneToMany(() => ConversionFactor, conversionFactor => conversionFactor.Category)
  conversionFactors: ConversionFactor[];
}
