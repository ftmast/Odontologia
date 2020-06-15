import { BaseEntity } from "./BaseEntity";
import { Entity, Column } from "typeorm";
import { Gender } from "./enum/GenderType";

@Entity({ name: 'Patient' })
export class Patient extends BaseEntity {

  @Column({ type: 'varchar', length: 255 })
  patientName: string

  @Column({ type: "varchar", length: 20 })
  cellPhone: string

  @Column({ type: "varchar", length: 14, nullable: true })
  cpf_cnpj: string

  @Column({ type: "varchar", length: 20, nullable: true })
  rg: string

  @Column()
  type: Gender;

  @Column({ type: "text", nullable: true})
  comments: string

  @Column({ type: "varchar", length: 100, nullable: true })
  email: string
  
  @Column({ type: "varchar", length: 20, nullable: true })
  phone: string

  @Column({ type: "varchar", length: 9, nullable: true })
  cep: string

  @Column({ type: "varchar", length: 500, nullable: true })
  address: string

  @Column({ type: "varchar", length: 200, nullable: true })
  neighborhood: string

  @Column({ type: "varchar", length: 200, nullable: true })
  addressComplement: string

  @Column({ type: "varchar", length: 100, nullable: true })
  city: string

  @Column({ type: "varchar", length: 5, nullable: true })
  state: string

  @Column({ type: "varchar", length: 100, nullable: true })
  healthInsurance: string

  @Column({ type: "varchar", length: 20, nullable: true  })
  cardNumberHI: string
  
  @Column({ type: "varchar", length: 20, nullable: true  })
  holderHI: string

  @Column({ type: "varchar", length: 11, nullable: true  })
  cpfHolderHI: string

}