import { DataSource } from "typeorm"
import { Config } from "../models"

export const datasource = new DataSource({
  type: "better-sqlite3",
  database: "./database/database.db",
  entities: [Config],
  synchronize: true,
  logging: false,
})

