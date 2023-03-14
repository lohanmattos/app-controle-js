import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678796398979 implements MigrationInterface {
    name = 'default1678796398979'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tb_secao\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`descricao\` varchar(255) NOT NULL, \`sigla\` varchar(255) NOT NULL, \`departamentoId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tb_empresa\` DROP COLUMN \`empresa_nome\``);
        await queryRunner.query(`ALTER TABLE \`tb_empresa\` DROP COLUMN \`empresa_sigla\``);
        await queryRunner.query(`ALTER TABLE \`tb_empresa\` DROP COLUMN \`empresa_descricao\``);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` DROP COLUMN \`departamento_nome\``);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` DROP COLUMN \`departamento_sigla\``);
        await queryRunner.query(`ALTER TABLE \`tb_empresa\` ADD \`nome\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tb_empresa\` ADD \`descricao\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tb_empresa\` ADD \`sigla\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` ADD \`nome\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` ADD \`sigla\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` DROP FOREIGN KEY \`FK_9d2bbbf2c04e0bf20e47feae7e7\``);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` CHANGE \`empresaId\` \`empresaId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tb_secao\` ADD CONSTRAINT \`FK_9177c6672e89681132a2c58d7b1\` FOREIGN KEY (\`departamentoId\`) REFERENCES \`tb_departamento\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` ADD CONSTRAINT \`FK_9d2bbbf2c04e0bf20e47feae7e7\` FOREIGN KEY (\`empresaId\`) REFERENCES \`tb_empresa\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` DROP FOREIGN KEY \`FK_9d2bbbf2c04e0bf20e47feae7e7\``);
        await queryRunner.query(`ALTER TABLE \`tb_secao\` DROP FOREIGN KEY \`FK_9177c6672e89681132a2c58d7b1\``);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` CHANGE \`empresaId\` \`empresaId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` ADD CONSTRAINT \`FK_9d2bbbf2c04e0bf20e47feae7e7\` FOREIGN KEY (\`empresaId\`) REFERENCES \`tb_empresa\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` DROP COLUMN \`sigla\``);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` DROP COLUMN \`nome\``);
        await queryRunner.query(`ALTER TABLE \`tb_empresa\` DROP COLUMN \`sigla\``);
        await queryRunner.query(`ALTER TABLE \`tb_empresa\` DROP COLUMN \`descricao\``);
        await queryRunner.query(`ALTER TABLE \`tb_empresa\` DROP COLUMN \`nome\``);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` ADD \`departamento_sigla\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tb_departamento\` ADD \`departamento_nome\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tb_empresa\` ADD \`empresa_descricao\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tb_empresa\` ADD \`empresa_sigla\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tb_empresa\` ADD \`empresa_nome\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`tb_secao\``);
    }

}
