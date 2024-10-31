import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { ConversionFactor } from "./ConversionFactors.entity";

@Entity({ name: "Cutouts" })
@Unique(["Name"])
export class Cutout {
  @PrimaryGeneratedColumn("uuid")
  ID: string;

  @Column({ type: "nvarchar", length: 255 })
  Name: string;

  @OneToMany(() => ConversionFactor, conversionFactor => conversionFactor.Cutout)
  conversionFactors: ConversionFactor[];
}
