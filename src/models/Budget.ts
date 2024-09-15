import { datasource } from "src/services/database";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum BudgetType {
  FIXED = 'fixed',
  PERCENTAGE = 'percentage',
}

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: number
  @Column({
    type: 'simple-enum',
    enum: BudgetType
  })
  type: BudgetType
  @Column('simple-json')
  values: { name: string, value: string }[]
}

export const budgetRepository = datasource.getRepository(Budget)
