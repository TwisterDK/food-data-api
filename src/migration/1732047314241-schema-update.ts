import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1732047314241 implements MigrationInterface {
    name = 'SchemaUpdate1732047314241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Cutouts\` (\`id\` varchar(36) NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_c0aea5c0f7b75be83a82e7b61a\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Produce\` (\`id\` varchar(36) NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_54f698efcb5bd59bb80c0b4542\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ConversionFactors\` (\`id\` varchar(36) NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`ConversionFactor\` float NOT NULL, \`categoryId\` varchar(36) NULL, \`produceId\` varchar(36) NULL, \`cutoutId\` varchar(36) NULL, UNIQUE INDEX \`IDX_ca65e806fd07617bd8cddf5bc4\` (\`categoryId\`, \`produceId\`, \`cutoutId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Categories\` (\`id\` varchar(36) NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(50) NOT NULL, UNIQUE INDEX \`IDX_9004ab74b495518b3dee4f4222\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`UnitOfMeasure\` (\`id\` varchar(36) NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`UnitFull\` varchar(50) NOT NULL, \`UnitShort\` varchar(50) NOT NULL, UNIQUE INDEX \`IDX_57640500aa489ce0fd06459ba5\` (\`UnitFull\`), UNIQUE INDEX \`IDX_0032dd79b43f589aea7c9a4e76\` (\`UnitShort\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Currencies\` (\`id\` varchar(36) NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`ISO\` varchar(3) NOT NULL, UNIQUE INDEX \`IDX_7dfa5c23e4cc1216f2c7a80b34\` (\`ISO\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL DEFAULT 'user', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`ConversionFactors\` ADD CONSTRAINT \`FK_6e9e5f1919305b5a321a1eb88d7\` FOREIGN KEY (\`categoryId\`) REFERENCES \`Categories\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`ConversionFactors\` ADD CONSTRAINT \`FK_a7a62d49c416d8f75a7e2a3c2a4\` FOREIGN KEY (\`produceId\`) REFERENCES \`Produce\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`ConversionFactors\` ADD CONSTRAINT \`FK_d69325c9624af293cf082106020\` FOREIGN KEY (\`cutoutId\`) REFERENCES \`Cutouts\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ConversionFactors\` DROP FOREIGN KEY \`FK_d69325c9624af293cf082106020\``);
        await queryRunner.query(`ALTER TABLE \`ConversionFactors\` DROP FOREIGN KEY \`FK_a7a62d49c416d8f75a7e2a3c2a4\``);
        await queryRunner.query(`ALTER TABLE \`ConversionFactors\` DROP FOREIGN KEY \`FK_6e9e5f1919305b5a321a1eb88d7\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_7dfa5c23e4cc1216f2c7a80b34\` ON \`Currencies\``);
        await queryRunner.query(`DROP TABLE \`Currencies\``);
        await queryRunner.query(`DROP INDEX \`IDX_0032dd79b43f589aea7c9a4e76\` ON \`UnitOfMeasure\``);
        await queryRunner.query(`DROP INDEX \`IDX_57640500aa489ce0fd06459ba5\` ON \`UnitOfMeasure\``);
        await queryRunner.query(`DROP TABLE \`UnitOfMeasure\``);
        await queryRunner.query(`DROP INDEX \`IDX_9004ab74b495518b3dee4f4222\` ON \`Categories\``);
        await queryRunner.query(`DROP TABLE \`Categories\``);
        await queryRunner.query(`DROP INDEX \`IDX_ca65e806fd07617bd8cddf5bc4\` ON \`ConversionFactors\``);
        await queryRunner.query(`DROP TABLE \`ConversionFactors\``);
        await queryRunner.query(`DROP INDEX \`IDX_54f698efcb5bd59bb80c0b4542\` ON \`Produce\``);
        await queryRunner.query(`DROP TABLE \`Produce\``);
        await queryRunner.query(`DROP INDEX \`IDX_c0aea5c0f7b75be83a82e7b61a\` ON \`Cutouts\``);
        await queryRunner.query(`DROP TABLE \`Cutouts\``);
    }

}
