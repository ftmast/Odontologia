import { BaseEntity } from "./BaseEntity";
import { Entity, Column, ManyToOne } from "typeorm";
import { Patient } from "./Patient";
import { ToothType } from "./enum/ToothType";

@Entity({ name: 'Anamnesis' })
export class Anamnesis extends BaseEntity {

    @ManyToOne(() => Patient, { eager: true}) //AutoPopulate
    patient: Patient

    @Column()
    toothType: ToothType

}