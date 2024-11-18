import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1731937863788 implements MigrationInterface {
    name = 'SchemaUpdate1731937863788'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ConversionFactors" ADD CONSTRAINT "UQ_ca65e806fd07617bd8cddf5bc4e" UNIQUE ("categoryId", "produceId", "cutoutId")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ConversionFactors" DROP CONSTRAINT "UQ_ca65e806fd07617bd8cddf5bc4e"`);
    }

}
