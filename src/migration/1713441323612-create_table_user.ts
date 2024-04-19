import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1713441323612 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE IF NOT EXISTS public.user
      (
        id SERIAL NOT NULL,
        name character varying NOT NULL,
        email character varying NOT NULL,
        phone character varying NOT NULL,
        type_user int NOT NULL,
        cpf character varying NOT NULL,
        password character varying NOT NULL,
        created_at timestamp without time zone DEFAULT now() NOT NULL,
        updated_at timestamp without time zone DEFAULT now() NOT NULL,
        primary key (id)
      );

      
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      DROP TABLE IF EXISTS public.usuario;
    `);
  }
}
