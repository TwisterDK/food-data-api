import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1730457845656 implements MigrationInterface {
    name = 'SchemaUpdate1730457845656'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Cutouts" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_ae092036cb08062d25ccc680b5f" DEFAULT NEWSEQUENTIALID(), "createdDate" datetime2 NOT NULL CONSTRAINT "DF_6959e0c64c253e17f93f29d0727" DEFAULT getdate(), "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_801a7266a144b33824030f22aa1" DEFAULT getdate(), "Name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_4a1cf2c2848c91759f94357b072" UNIQUE ("Name"), CONSTRAINT "PK_ae092036cb08062d25ccc680b5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Produce" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_4efa837adb507ae106a773f809b" DEFAULT NEWSEQUENTIALID(), "createdDate" datetime2 NOT NULL CONSTRAINT "DF_2cbc7a6fea61dfbe943d2acc402" DEFAULT getdate(), "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_b89540de637d558e537d2578a43" DEFAULT getdate(), "ProduceName" nvarchar(255) NOT NULL, CONSTRAINT "UQ_0a0e7278651c4e6fd5e949ed41f" UNIQUE ("ProduceName"), CONSTRAINT "PK_4efa837adb507ae106a773f809b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ConversionFactors" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_fb0526af542710ad8a7bff1f00f" DEFAULT NEWSEQUENTIALID(), "createdDate" datetime2 NOT NULL CONSTRAINT "DF_9ac0932f5fd380ae2262bc5b29e" DEFAULT getdate(), "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_2e3bf8855f760dacfabb200c8fc" DEFAULT getdate(), "ConversionFactor" float NOT NULL, "categoryId" uniqueidentifier, "produceId" uniqueidentifier, "cutoutId" uniqueidentifier, CONSTRAINT "PK_fb0526af542710ad8a7bff1f00f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Categories" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_537b5c00afe7427c4fc9434cd59" DEFAULT NEWSEQUENTIALID(), "createdDate" datetime2 NOT NULL CONSTRAINT "DF_8632b4097063ee654e1f0d69a95" DEFAULT getdate(), "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_0ca962882ab6b8a333cdcb94401" DEFAULT getdate(), "Type" nvarchar(50) NOT NULL, CONSTRAINT "UQ_4159acfc9564ba7e0f9d13e1bc6" UNIQUE ("Type"), CONSTRAINT "PK_537b5c00afe7427c4fc9434cd59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "UnitOfMeasure" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_dfb33a485aa60b74b5ff05abfcb" DEFAULT NEWSEQUENTIALID(), "createdDate" datetime2 NOT NULL CONSTRAINT "DF_c1fc2026ee32014dbbcd31c077b" DEFAULT getdate(), "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_5feb1f11b3d8e5b49bd0f2e4de6" DEFAULT getdate(), "UnitFull" nvarchar(50) NOT NULL, "UnitShort" nvarchar(50) NOT NULL, CONSTRAINT "UQ_57640500aa489ce0fd06459ba53" UNIQUE ("UnitFull"), CONSTRAINT "UQ_0032dd79b43f589aea7c9a4e76c" UNIQUE ("UnitShort"), CONSTRAINT "PK_dfb33a485aa60b74b5ff05abfcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Currencies" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_161926657054051e70c1d10818f" DEFAULT NEWSEQUENTIALID(), "createdDate" datetime2 NOT NULL CONSTRAINT "DF_985ceb888961dc3961a8b323502" DEFAULT getdate(), "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_0264671e25d922f8fd182433481" DEFAULT getdate(), "ISO" nvarchar(3) NOT NULL, CONSTRAINT "UQ_7dfa5c23e4cc1216f2c7a80b349" UNIQUE ("ISO"), CONSTRAINT "PK_161926657054051e70c1d10818f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_a3ffb1c0c8416b9fc6f907b7433" DEFAULT NEWSEQUENTIALID(), "createdDate" datetime2 NOT NULL CONSTRAINT "DF_f385e8f4417906af3804f77866a" DEFAULT getdate(), "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_bfaba0b739627dc007b02df5b5c" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, "role" nvarchar(255) NOT NULL CONSTRAINT "DF_ace513fa30d485cfd25c11a9e4a" DEFAULT 'user', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" ADD CONSTRAINT "FK_6e9e5f1919305b5a321a1eb88d7" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" ADD CONSTRAINT "FK_a7a62d49c416d8f75a7e2a3c2a4" FOREIGN KEY ("produceId") REFERENCES "Produce"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" ADD CONSTRAINT "FK_d69325c9624af293cf082106020" FOREIGN KEY ("cutoutId") REFERENCES "Cutouts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ConversionFactors" DROP CONSTRAINT "FK_d69325c9624af293cf082106020"`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" DROP CONSTRAINT "FK_a7a62d49c416d8f75a7e2a3c2a4"`);
        await queryRunner.query(`ALTER TABLE "ConversionFactors" DROP CONSTRAINT "FK_6e9e5f1919305b5a321a1eb88d7"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "Currencies"`);
        await queryRunner.query(`DROP TABLE "UnitOfMeasure"`);
        await queryRunner.query(`DROP TABLE "Categories"`);
        await queryRunner.query(`DROP TABLE "ConversionFactors"`);
        await queryRunner.query(`DROP TABLE "Produce"`);
        await queryRunner.query(`DROP TABLE "Cutouts"`);
    }

}
