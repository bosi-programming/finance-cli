import { DataTypes } from "sequelize";
import { sequelize } from "src/services/database";

export const Config = sequelize.define('Config', {
  period: DataTypes.ENUM('weekly', 'halfMonthly', 'monthly'),
})
