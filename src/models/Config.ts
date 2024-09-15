import { datasource } from "src/services/database";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum ConfigPeriod {
  WEEKLY = 'weekly',
  HALF_MONTHLY = 'halfMonthly',
  MONTHLY = 'monthly'
}

@Entity()
export class Config {
  @PrimaryGeneratedColumn()
  id: number
  @Column({
    type: 'simple-enum',
    enum: ConfigPeriod
  })
  period: ConfigPeriod
}

export const configRepository = datasource.getRepository(Config);
