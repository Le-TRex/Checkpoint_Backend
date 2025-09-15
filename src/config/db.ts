// TypeORM
import { DataSource } from "typeorm";

// Entités
import { Pays } from "../entities/Pays";

// DATASOURCE
export const dataSource = new DataSource({
  type: "sqlite",
  database: "checkpoint.sqlite",
  entities: [Pays],
  synchronize: true,
});