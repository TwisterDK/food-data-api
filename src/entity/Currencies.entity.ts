import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity({ name: "Currencies" })
@Unique(["ISO"])
export class Currency {
  @PrimaryGeneratedColumn("uuid")
  ID: string;

  @Column({ type: "nvarchar", length: 3 })
  ISO: string;
}
