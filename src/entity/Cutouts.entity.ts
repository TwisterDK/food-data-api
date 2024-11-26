import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { ConversionFactor } from "./ConversionFactors.entity";
import { CommonEntity } from "./Common.entity";

@Entity({ name: "Cutouts" })
@Unique(["name"])
export class Cutout extends CommonEntity {
  @Column({ type: "varchar", length: 255 })
  name: string;

  @OneToMany(() => ConversionFactor, conversionFactor => conversionFactor.Cutout)
  conversionFactors: ConversionFactor[];
}
