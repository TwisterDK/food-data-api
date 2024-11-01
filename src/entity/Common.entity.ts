import { BaseEntity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Entity } from 'typeorm';

export abstract class CommonEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}
