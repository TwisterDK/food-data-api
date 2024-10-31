import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1730365137409 implements MigrationInterface {
    name = 'SchemaUpdate1730365137409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Cutouts" ("ID" uniqueidentifier NOT NULL CONSTRAINT "DF_4c8d6358caba7c6f679c6af036c" DEFAULT NEWSEQUENTIALID(), "Name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_4a1cf2c2848c91759f94357b072" UNIQUE ("Name"), CONSTRAINT "PK_4c8d6358caba7c6f679c6af036c" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "Produce" ("ID" uniqueidentifier NOT NULL CONSTRAINT "DF_d645faf874d3c7b6b6dd0bb7260" DEFAULT NEWSEQUENTIALID(), "ProduceName" nvarchar(255) NOT NULL, CONSTRAINT "UQ_0a0e7278651c4e6fd5e949ed41f" UNIQUE ("ProduceName"), CONSTRAINT "PK_d645faf874d3c7b6b6dd0bb7260" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "ConversionFactors" ("ID" uniqueidentifier NOT NULL CONSTRAINT "DF_ab8172cdab1489e4d157f17d68f" DEFAULT NEWSEQUENTIALID(), "ConversionFactor" float NOT NULL, "categoryID" uniqueidentifier, "produceID" uniqueidentifier, "cutoutID" uniqueidentifier, CONSTRAINT "PK_ab8172cdab1489e4d157f17d68f" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "Categories" ("ID" uniqueidentifier NOT NULL CONSTRAINT "DF_3c73da23b1fd3d4a4702da93aaf" DEFAULT NEWSEQUENTIALID(), "Type" nvarchar(50) NOT NULL, CONSTRAINT "UQ_4159acfc9564ba7e0f9d13e1bc6" UNIQUE ("Type"), CONSTRAINT "PK_3c73da23b1fd3d4a4702da93aaf" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "UnitOfMeasure" ("ID" uniqueidentifier NOT NULL CONSTRAINT "DF_697c3c5a6f068b290d50138fba8" DEFAULT NEWSEQUENTIALID(), "UnitFull" nvarchar(50) NOT NULL, "UnitShort" nvarchar(50) NOT NULL, CONSTRAINT "UQ_57640500aa489ce0fd06459ba53" UNIQUE ("UnitFull"), CONSTRAINT "UQ_0032dd79b43f589aea7c9a4e76c" UNIQUE ("UnitShort"), CONSTRAINT "PK_697c3c5a6f068b290d50138fba8" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "Currencies" ("ID" uniqueidentifier NOT NULL CONSTRAINT "DF_183d48ee0fb0899ebcca3d3e850" DEFAULT NEWSEQUENTIALID(), "ISO" nvarchar(3) NOT NULL, CONSTRAINT "UQ_7dfa5c23e4cc1216f2c7a80b349" UNIQUE ("ISO"), CONSTRAINT "PK_183d48ee0fb0899ebcca3d3e850" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" ADD CONSTRAINT "FK_17a86d02064f32270c57f6eea1c" FOREIGN KEY ("categoryID") REFERENCES "Categories"("ID") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" ADD CONSTRAINT "FK_e312447c1bd92feb2c445438ee9" FOREIGN KEY ("produceID") REFERENCES "Produce"("ID") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" ADD CONSTRAINT "FK_4a4026656841933eed6f3f9d162" FOREIGN KEY ("cutoutID") REFERENCES "Cutouts"("ID") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ConversionFactors" DROP CONSTRAINT "FK_4a4026656841933eed6f3f9d162"`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" DROP CONSTRAINT "FK_e312447c1bd92feb2c445438ee9"`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" DROP CONSTRAINT "FK_17a86d02064f32270c57f6eea1c"`);
        await queryRunner.query(`DROP TABLE "Currencies"`);
        await queryRunner.query(`DROP TABLE "UnitOfMeasure"`);
        await queryRunner.query(`DROP TABLE "Categories"`);
        await queryRunner.query(`DROP TABLE "ConversionFactors"`);
        await queryRunner.query(`DROP TABLE "Produce"`);
        await queryRunner.query(`DROP TABLE "Cutouts"`);
    }

}
