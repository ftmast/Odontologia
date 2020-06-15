import { BaseEntity } from "./BaseEntity";
import { Entity, Column, ManyToOne } from "typeorm";
import { Proceeding } from "./Proceeding";

@Entity({ name: 'ProceedingEstimate' })
export class ProceedingEstimate extends BaseEntity {

    @ManyToOne(() => Proceeding, { eager: true}) //AutoPopulate
    proceeding: Array<Proceeding>

    @Column({ type: "numeric" })
    toothId: number
}