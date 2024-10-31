import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { ConversionFactor } from "./ConversionFactors.entity";
import { CommonEntity } from "./Common.entity";

@Entity({ name: "Categories" })
@Unique(["Type"])
export class Category extends CommonEntity {
  @Column({ type: "nvarchar", length: 50 })
  Type: string;
  
  @OneToMany(() => ConversionFactor, conversionFactor => conversionFactor.Category)
  conversionFactors: ConversionFactor[];
}
