import { BaseEntity } from "./BaseEntity";
import { Entity, Column, ManyToOne } from "typeorm";
import { Anamnesis } from "./Anamnesis";
import { ToothType } from "./enum/ToothType";

@Entity({ name: 'AnamnesisQuestions' })
export class AnamnesisQuestions extends BaseEntity {

    @Column({ type: 'varchar', length: 500 })
    question: string

    @Column({ default: false })
    attention: boolean

}