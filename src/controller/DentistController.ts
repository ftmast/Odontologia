import { Request } from 'express';
import { BaseController } from "./BaseController";
import { Dentist } from '../entity/Dentist';


export class DentistController extends BaseController<Dentist> {

  constructor() {
    super(Dentist, true);
  }
  
  async save(request: Request) {
    let _dentist = <Dentist>request.body;

    super.isRequired(_dentist.dentistName, 'O nome do dentista é obrigatório');
    super.isRequired(_dentist.cellPhone, 'O celular do dentista é obrigatório');

    return super.save(_dentist, request);
  }
}
