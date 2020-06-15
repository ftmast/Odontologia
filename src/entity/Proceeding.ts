import { BaseEntity } from "./BaseEntity";
import { Entity, Column, ManyToOne } from "typeorm";

@Entity({ name: 'Proceeding' })
export class Proceeding extends BaseEntity {

    @Column({ type: 'varchar', length: 200 })
    proceedingName: string;

    @Column({ type: 'decimal'})
    value: number

}