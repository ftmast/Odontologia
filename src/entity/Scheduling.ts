import { BaseEntity } from "./BaseEntity";
import { Entity, Column, ManyToOne } from "typeorm";
import { Dentist } from "./Dentist";
import { Patient } from "./Patient";

@Entity({ name: 'Scheduling' })
export class Scheduling extends BaseEntity {

    @ManyToOne(() => Patient, { eager: true}) //AutoPopulate
    patient: Patient

    @ManyToOne(() => Dentist, { eager: true}) //AutoPopulate
    dentist: Dentist

    @Column({ type: "datetime" })
    scheduleStart: Date

    @Column({ type: "datetime" })
    scheduleEnd: Date

    @Column({ type: "int" })
    hour: number

    @Column({ type: "int" })
    duration: number

    @Column({ default: false })
    miss: boolean

    @Column({ default: false })
    reschedule: boolean

    @Column({ type: 'text', nullable: true })
    comments: string
}