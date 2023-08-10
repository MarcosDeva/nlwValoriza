import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm";

const porta = process.env.DB_PORT?.toString();

export const AppDataSource = new DataSource({
    "type": "sqlite",
    "database": "src/database/database.sqlite",
    //POSTGRE
    // type: 'postgres',
	// host: process.env.DB_HOST,
	// port: 3306,
	// username: process.env.DB_USER,
	// password: process.env.DB_PASS,
	// database: process.env.DB_NAME,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})
