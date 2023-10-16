import { registerAs } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";

const config = {
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "user",
    password: "pass1234",
    database: "db",
    entities: ["src/**/*.entity{.ts,.js}"],
    migrations: ["src/migrations/*{.ts,.js}"],
    migrationsTableName: "pokemon",
    autoLoadEntities: true,
    synchronize: true
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);