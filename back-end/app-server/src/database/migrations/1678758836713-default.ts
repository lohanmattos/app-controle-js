import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678758836713 implements MigrationInterface {
    name = 'default1678758836713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tb_departamento\` (\`id\` int NOT NULL, \`departamento_nome\` varchar(255) NOT NULL, \`departamento_sigla\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_empresa\` (\`id\` int NOT NULL, \`empresa_nome\` varchar(255) NOT NULL, \`empresa_sigla\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tb_empresa\``);
        await queryRunner.query(`DROP TABLE \`tb_departamento\``);
    }

}
