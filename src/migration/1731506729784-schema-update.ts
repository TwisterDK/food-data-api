import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1731506729784 implements MigrationInterface {
    name = 'SchemaUpdate1731506729784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`EXEC sp_rename "FoodData.dbo.Cutouts.Name", "name"`);
        await queryRunner.query(`EXEC sp_rename "FoodData.dbo.Cutouts.UQ_4a1cf2c2848c91759f94357b072", "UQ_c0aea5c0f7b75be83a82e7b61a3"`);
        await queryRunner.query(`EXEC sp_rename "FoodData.dbo.Produce.ProduceName", "name"`);
        await queryRunner.query(`EXEC sp_rename "FoodData.dbo.Produce.UQ_0a0e7278651c4e6fd5e949ed41f", "UQ_54f698efcb5bd59bb80c0b45425"`);
        await queryRunner.query(`EXEC sp_rename "FoodData.dbo.Categories.Type", "name"`);
        await queryRunner.query(`EXEC sp_rename "FoodData.dbo.Categories.UQ_4159acfc9564ba7e0f9d13e1bc6", "UQ_9004ab74b495518b3dee4f4222a"`);
        await queryRunner.query(`ALTER TABLE "Cutouts" DROP CONSTRAINT "UQ_c0aea5c0f7b75be83a82e7b61a3"`);
        await queryRunner.query(`ALTER TABLE "Cutouts" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "Cutouts" ADD "name" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Cutouts" ADD CONSTRAINT "UQ_c0aea5c0f7b75be83a82e7b61a3" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "Produce" DROP CONSTRAINT "UQ_54f698efcb5bd59bb80c0b45425"`);
        await queryRunner.query(`ALTER TABLE "Produce" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "Produce" ADD "name" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Produce" ADD CONSTRAINT "UQ_54f698efcb5bd59bb80c0b45425" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Produce" DROP CONSTRAINT "UQ_54f698efcb5bd59bb80c0b45425"`);
        await queryRunner.query(`ALTER TABLE "Produce" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "Produce" ADD "name" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Produce" ADD CONSTRAINT "UQ_54f698efcb5bd59bb80c0b45425" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "Cutouts" DROP CONSTRAINT "UQ_c0aea5c0f7b75be83a82e7b61a3"`);
        await queryRunner.query(`ALTER TABLE "Cutouts" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "Cutouts" ADD "name" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Cutouts" ADD CONSTRAINT "UQ_c0aea5c0f7b75be83a82e7b61a3" UNIQUE ("name")`);
        await queryRunner.query(`EXEC sp_rename "FoodData.dbo.Categories.UQ_9004ab74b495518b3dee4f4222a", "UQ_4159acfc9564ba7e0f9d13e1bc6"`);
        await queryRunner.query(`EXEC sp_rename "FoodData.dbo.Categories.name", "Type"`);
        await queryRunner.query(`EXEC sp_rename "FoodData.dbo.Produce.UQ_54f698efcb5bd59bb80c0b45425", "UQ_0a0e7278651c4e6fd5e949ed41f"`);
        await queryRunner.query(`EXEC sp_rename "FoodData.dbo.Produce.name", "ProduceName"`);
        await queryRunner.query(`EXEC sp_rename "FoodData.dbo.Cutouts.UQ_c0aea5c0f7b75be83a82e7b61a3", "UQ_4a1cf2c2848c91759f94357b072"`);
        await queryRunner.query(`EXEC sp_rename "FoodData.dbo.Cutouts.name", "Name"`);
    }

}
