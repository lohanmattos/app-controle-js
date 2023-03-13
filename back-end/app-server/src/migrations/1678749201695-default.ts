import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678749201695 implements MigrationInterface {
    name = 'default1678749201695'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` CHANGE \`id\` \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` ADD \`id\` int NOT NULL PRIMARY KEY`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` ADD \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
    }

}
