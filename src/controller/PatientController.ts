import { Request } from 'express';
import { Patient } from './../entity/Patient';
import { BaseController } from "./BaseController";


export class PatientController extends BaseController<Patient> {

  constructor() {
    super(Patient, false);
  }
  
  async save(request: Request) {
    let _patient = <Patient>request.body;

    super.isRequired(_patient.patientName, 'O nome do paciente é obrigatório');
    super.isRequired(_patient.cellPhone, 'O numero do celular do paciente é obrigatório');
    //super.isRequired(_patient.type, 'O genero do paciente é obrigatório');
    //super.isRequired(_patient.healthInsurance, 'O plano de saúde do paciente é obrigatório');

    return super.save(_patient, request);

  }

}