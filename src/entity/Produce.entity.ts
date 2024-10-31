import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { ConversionFactor } from "./ConversionFactors.entity";
import { CommonEntity } from "./Common.entity";

@Entity({ name: "Produce" })
@Unique(["ProduceName"])
export class Produce extends CommonEntity {
  @Column({ type: "nvarchar", length: 255 })
  ProduceName: string;

  @OneToMany(() => ConversionFactor, conversionFactor => conversionFactor.Produce)
  conversionFactors: ConversionFactor[];  
}
