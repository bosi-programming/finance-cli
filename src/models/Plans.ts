import { DataTypes } from "sequelize";
import { sequelize } from "src/services/database";

export const Config = sequelize.define('Budget', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  timePeriod: DataTypes.TEXT(),
  values: DataTypes.JSON()
})
