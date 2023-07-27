import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    "type": "sqlite",
    "database": "src/database/database.sqlite",
    "migrations": [],
    "migrationsTableName": "custom_migration_table",

});

// export const AppDataSource = new DataSource({
//     "type": "mysql",
//     "host": "localhost",
//     "port": 3306,
//     "username": "admin",
//     "password": "123qwe",
//     "database": "dbnlwvaloriza",
//     "synchronize": true,
//     "logging": true,
//     // "entities": [Post, Category],
//     "subscribers": [],
//     "migrations": [],
// });
