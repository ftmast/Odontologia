import { BaseEntity } from "./BaseEntity";
import { Entity, Column } from "typeorm";

@Entity({ name: 'Dentist' })
export class Dentist extends BaseEntity {

  @Column({ type: 'varchar', length: 255 })
  dentistName: string

  @Column({ type: 'varchar', length: 20 })
  cellPhone: string

}