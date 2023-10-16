import { MigrationInterface, QueryRunner } from "typeorm";
const ExcelJS= require('exceljs');

export class ImportPokemonData1697405364763 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const workbook = new ExcelJS.Workbook();        

        await workbook.xlsx.readFile('PokemonGo.xlsx');
        const worksheet = workbook.getWorksheet(1);
        for (let row = 2; row <= worksheet.rowCount; row++) {
          const name = worksheet.getCell(`B${row}`).value;
          const pokdexNumber = worksheet.getCell(`C${row}`).value;
          const generation = worksheet.getCell(`E${row}`).value;
          const evolutionStage = worksheet.getCell(`F${row}`).value;
          const evolved = worksheet.getCell(`G${row}`).value;
          const familyID = worksheet.getCell(`H${row}`).value;
          const type = worksheet.getCell(`J${row}`).value;
          const weather = worksheet.getCell(`L${row}`).value;
          const statTotal = worksheet.getCell(`N${row}`).value;
    
          await queryRunner.query(
            'INSERT INTO pokemon ("name", "pokdexNumber", "generation", "evolutionStage", "evolved", "familyID", "type", "weather", "statTotal") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
            [name, +pokdexNumber, +generation, evolutionStage, +evolved, +familyID, type, weather, +statTotal]
          );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
