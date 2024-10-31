import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity({ name: "UnitOfMeasure" })
@Unique(["UnitShort"])
@Unique(["UnitFull"])
export class UnitOfMeasure extends CommonEntity {
  @Column({ type: "nvarchar", length: 50 })
  UnitFull: string;

  @Column({ type: "nvarchar", length: 50 })
  UnitShort: string;
}
