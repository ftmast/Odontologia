import { Request } from 'express';
import { BaseController } from "./BaseController";
import { Anamnesis } from '../entity/Anamnesis';


export class AnamnesisController extends BaseController<Anamnesis> {

  constructor() {
    super(Anamnesis, true);
  }
  
  async save(request: Request) {
    let _anamnesis = <Anamnesis>request.body;

    super.isRequired(_anamnesis.patient, 'Informar o paciente que respondeu é obrigatório');

    return super.save(_anamnesis, request);
  }
}
