import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678818748747 implements MigrationInterface {
    name = 'default1678818748747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`departamento\` ADD \`empresaId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`departamento\` ADD CONSTRAINT \`FK_3b8766c84b1ebde7489a0261c5f\` FOREIGN KEY (\`empresaId\`) REFERENCES \`empresa\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`departamento\` DROP FOREIGN KEY \`FK_3b8766c84b1ebde7489a0261c5f\``);
        await queryRunner.query(`ALTER TABLE \`departamento\` DROP COLUMN \`empresaId\``);
    }

}
