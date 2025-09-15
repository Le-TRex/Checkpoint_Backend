// TypeORM
import { DataSource } from "typeorm";

// Entités
import { Pays } from "../entities/Pays";
import { Continent } from "../entities/Continent";

// DATASOURCE
export const dataSource = new DataSource({
  type: "sqlite",
  database: "checkpoint.sqlite",
  entities: [Pays, Continent],
  synchronize: true,
});