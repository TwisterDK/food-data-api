import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity({ name: "Currencies" })
@Unique(["ISO"])
export class Currency extends CommonEntity {
  @Column({ type: "nvarchar", length: 3 })
  ISO: string;
}
