import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678748906100 implements MigrationInterface {
    name = 'default1678748906100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tb_departamento\` (\`id\` int NOT NULL AUTO_INCREMENT, \`departamento_nome\` varchar(255) NOT NULL, \`departamento_sigla\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tb_departamento\``);
    }

}
