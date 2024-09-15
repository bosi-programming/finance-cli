import "reflect-metadata"
import { datasource } from "./services/database"

datasource.initialize().catch((error) => console.log(error))
