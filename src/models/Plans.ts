import { datasource } from "src/services/database";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plan {
  @PrimaryGeneratedColumn()
  id: number
  @Column('simple-json')
  values: { name: string, value: string }[]
  @Column('datetime')
  startDate: Date
  @Column('datetime')
  endDate: Date
}

export const planRepository = datasource.getRepository(Plan)
