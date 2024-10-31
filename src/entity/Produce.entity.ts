import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { ConversionFactor } from "./ConversionFactors.entity";

@Entity({ name: "Produce" })
@Unique(["ProduceName"])
export class Produce {
  @PrimaryGeneratedColumn("uuid")
  ID: string;

  @Column({ type: "nvarchar", length: 255 })
  ProduceName: string;

  @OneToMany(() => ConversionFactor, conversionFactor => conversionFactor.Produce)
  conversionFactors: ConversionFactor[];  
}
