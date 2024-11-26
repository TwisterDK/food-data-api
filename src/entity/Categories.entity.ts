import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { ConversionFactor } from "./ConversionFactors.entity";
import { CommonEntity } from "./Common.entity";

@Entity({ name: "Categories" })
@Unique(["name"])
export class Category extends CommonEntity {
  @Column({ type: "varchar", length: 50 })
  name: string;
  
  @OneToMany(() => ConversionFactor, conversionFactor => conversionFactor.Category)
  conversionFactors: ConversionFactor[];
}
