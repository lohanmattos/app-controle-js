import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678748955383 implements MigrationInterface {
    name = 'default1678748955383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tb_empresa\` (\`id\` int NOT NULL AUTO_INCREMENT, \`empresa_nome\` varchar(255) NOT NULL, \`empresa_sigla\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tb_empresa\``);
    }

}
