import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1730385839899 implements MigrationInterface {
    name = 'SchemaUpdate1730385839899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cutouts" ADD "createdDate" datetime2 NOT NULL CONSTRAINT "DF_6959e0c64c253e17f93f29d0727" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "Cutouts" ADD "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_801a7266a144b33824030f22aa1" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "Produce" ADD "createdDate" datetime2 NOT NULL CONSTRAINT "DF_2cbc7a6fea61dfbe943d2acc402" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "Produce" ADD "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_b89540de637d558e537d2578a43" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" ADD "createdDate" datetime2 NOT NULL CONSTRAINT "DF_9ac0932f5fd380ae2262bc5b29e" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" ADD "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_2e3bf8855f760dacfabb200c8fc" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "Categories" ADD "createdDate" datetime2 NOT NULL CONSTRAINT "DF_8632b4097063ee654e1f0d69a95" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "Categories" ADD "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_0ca962882ab6b8a333cdcb94401" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "UnitOfMeasure" ADD "createdDate" datetime2 NOT NULL CONSTRAINT "DF_c1fc2026ee32014dbbcd31c077b" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "UnitOfMeasure" ADD "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_5feb1f11b3d8e5b49bd0f2e4de6" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "Currencies" ADD "createdDate" datetime2 NOT NULL CONSTRAINT "DF_985ceb888961dc3961a8b323502" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "Currencies" ADD "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_0264671e25d922f8fd182433481" DEFAULT getdate()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Currencies" DROP CONSTRAINT "DF_0264671e25d922f8fd182433481"`);
        await queryRunner.query(`ALTER TABLE "Currencies" DROP COLUMN "updatedDate"`);
        await queryRunner.query(`ALTER TABLE "Currencies" DROP CONSTRAINT "DF_985ceb888961dc3961a8b323502"`);
        await queryRunner.query(`ALTER TABLE "Currencies" DROP COLUMN "createdDate"`);
        await queryRunner.query(`ALTER TABLE "UnitOfMeasure" DROP CONSTRAINT "DF_5feb1f11b3d8e5b49bd0f2e4de6"`);
        await queryRunner.query(`ALTER TABLE "UnitOfMeasure" DROP COLUMN "updatedDate"`);
        await queryRunner.query(`ALTER TABLE "UnitOfMeasure" DROP CONSTRAINT "DF_c1fc2026ee32014dbbcd31c077b"`);
        await queryRunner.query(`ALTER TABLE "UnitOfMeasure" DROP COLUMN "createdDate"`);
        await queryRunner.query(`ALTER TABLE "Categories" DROP CONSTRAINT "DF_0ca962882ab6b8a333cdcb94401"`);
        await queryRunner.query(`ALTER TABLE "Categories" DROP COLUMN "updatedDate"`);
        await queryRunner.query(`ALTER TABLE "Categories" DROP CONSTRAINT "DF_8632b4097063ee654e1f0d69a95"`);
        await queryRunner.query(`ALTER TABLE "Categories" DROP COLUMN "createdDate"`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" DROP CONSTRAINT "DF_2e3bf8855f760dacfabb200c8fc"`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" DROP COLUMN "updatedDate"`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" DROP CONSTRAINT "DF_9ac0932f5fd380ae2262bc5b29e"`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" DROP COLUMN "createdDate"`);
        await queryRunner.query(`ALTER TABLE "Produce" DROP CONSTRAINT "DF_b89540de637d558e537d2578a43"`);
        await queryRunner.query(`ALTER TABLE "Produce" DROP COLUMN "updatedDate"`);
        await queryRunner.query(`ALTER TABLE "Produce" DROP CONSTRAINT "DF_2cbc7a6fea61dfbe943d2acc402"`);
        await queryRunner.query(`ALTER TABLE "Produce" DROP COLUMN "createdDate"`);
        await queryRunner.query(`ALTER TABLE "Cutouts" DROP CONSTRAINT "DF_801a7266a144b33824030f22aa1"`);
        await queryRunner.query(`ALTER TABLE "Cutouts" DROP COLUMN "updatedDate"`);
        await queryRunner.query(`ALTER TABLE "Cutouts" DROP CONSTRAINT "DF_6959e0c64c253e17f93f29d0727"`);
        await queryRunner.query(`ALTER TABLE "Cutouts" DROP COLUMN "createdDate"`);
    }

}
