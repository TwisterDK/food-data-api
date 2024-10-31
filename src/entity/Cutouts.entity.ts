import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { ConversionFactor } from "./ConversionFactors.entity";
import { CommonEntity } from "./Common.entity";

@Entity({ name: "Cutouts" })
@Unique(["Name"])
export class Cutout extends CommonEntity {
  @Column({ type: "nvarchar", length: 255 })
  Name: string;

  @OneToMany(() => ConversionFactor, conversionFactor => conversionFactor.Cutout)
  conversionFactors: ConversionFactor[];
}
