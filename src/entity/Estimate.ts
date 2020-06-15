import { BaseEntity } from "./BaseEntity";
import { Entity, Column, ManyToOne } from "typeorm";
import { Patient } from "./Patient";
import { Dentist } from "./Dentist";
import { ProceedingEstimate } from "./ProceedingEstimate";

@Entity({ name: 'Estimate' })
export class Estimate extends BaseEntity {

    @ManyToOne(() => Patient, { eager: true}) //AutoPopulate
    patient: Patient

    @ManyToOne(() => Dentist, { eager: true}) //AutoPopulate
    dentist: Dentist

    @ManyToOne(() => ProceedingEstimate, { eager: true}) //AutoPopulate
    proceedingEstimate: Array<ProceedingEstimate>

    @Column({ type: 'varchar', length: 255 })
    estimateName: string

    @Column({ type: "datetime" })
    estimateDate: Date

}