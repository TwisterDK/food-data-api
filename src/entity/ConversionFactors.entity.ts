import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Category } from "./Categories.entity";
import { Cutout } from "./Cutouts.entity";
import { Produce } from "./Produce.entity";

@Entity({ name: "ConversionFactors" })
export class ConversionFactor {
  @PrimaryGeneratedColumn("uuid")
  ID: string;

  @ManyToOne(() => Category, category => category.conversionFactors, { cascade: true, onDelete: "CASCADE", onUpdate: "CASCADE" })
  Category: Category;

  @ManyToOne(() => Produce, produce => produce.conversionFactors, { cascade: true, onDelete: "CASCADE", onUpdate: "CASCADE" })
  Produce: Produce;

  @ManyToOne(() => Cutout, cutout => cutout.conversionFactors, { cascade: true, onDelete: "CASCADE", onUpdate: "CASCADE" })
  Cutout: Cutout;

  @Column({ type: "float" })
  ConversionFactor: number;
}
