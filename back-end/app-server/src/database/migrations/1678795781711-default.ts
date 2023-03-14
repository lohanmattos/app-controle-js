import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678795781711 implements MigrationInterface {
    name = 'default1678795781711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`FK_9d2bbbf2c04e0bf20e47feae7e7\` ON \`tb_departamento\``);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` CHANGE \`empresaId\` \`empresaId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` ADD CONSTRAINT \`FK_9d2bbbf2c04e0bf20e47feae7e7\` FOREIGN KEY (\`empresaId\`) REFERENCES \`tb_empresa\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` DROP FOREIGN KEY \`FK_9d2bbbf2c04e0bf20e47feae7e7\``);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` CHANGE \`empresaId\` \`empresaId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE INDEX \`FK_9d2bbbf2c04e0bf20e47feae7e7\` ON \`tb_departamento\` (\`empresaId\`)`);
    }

}
