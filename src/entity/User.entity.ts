import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity({ name: "users" })
export class User extends CommonEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: "user" })
  role: string;
}
