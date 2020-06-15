import { BaseEntity } from "./BaseEntity";
import { Entity, Column, ManyToOne } from "typeorm";
import { Anamnesis } from "./Anamnesis";
import { AnamnesisQuestions } from "./AnamnesisQuestions";

@Entity({ name: 'AnamnesisPatientAnswers' })
export class AnamnesisPatientAnswers extends BaseEntity {

    @ManyToOne(() => Anamnesis, { eager: true}) //AutoPopulate
    anamnesis: Anamnesis

    @ManyToOne(() => AnamnesisQuestions, { eager: true}) //AutoPopulate
    anamnesisQuestions: AnamnesisQuestions

    @Column({ type: "int" })
    answerOption: number

    @Column({ type: "varchar", length: 500 })
    answerAddInfo: string

}