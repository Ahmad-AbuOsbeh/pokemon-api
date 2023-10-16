import { registerAs } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";

const config = {
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "user",
    password: "pass1234",
    database: "db",
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["dist/migrations/*{.ts,.js}"],
    migrationsTableName: "pokemon",
    autoLoadEntities: true,
    synchronize: true
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);