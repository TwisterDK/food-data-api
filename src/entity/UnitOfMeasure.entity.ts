import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity({ name: "UnitOfMeasure" })
@Unique(["UnitShort"])
@Unique(["UnitFull"])
export class UnitOfMeasure {
  @PrimaryGeneratedColumn("uuid")
  ID: string;

  @Column({ type: "nvarchar", length: 50 })
  UnitFull: string;

  @Column({ type: "nvarchar", length: 50 })
  UnitShort: string;
}
