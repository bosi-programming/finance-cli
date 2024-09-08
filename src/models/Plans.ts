import { DataTypes } from "sequelize";
import { sequelize } from "src/services/database";

export const Plan = sequelize.define('Plan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  timePeriod: DataTypes.TEXT(),
  values: DataTypes.JSON()
})
