import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678815687279 implements MigrationInterface {
    name = 'default1678815687279'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`empresa\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`descricao\` varchar(255) NOT NULL, \`sigla\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`empresa\``);
    }

}
