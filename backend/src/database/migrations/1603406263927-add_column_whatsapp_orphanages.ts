import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addColumnWhatsappOrphanages1603406263927 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("orphanages", new TableColumn({
            name: "whatsapp",
            type: 'varchar',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("orphanages", "whatsapp")
    }

}
