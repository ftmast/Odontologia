import { Request } from 'express';
import { BaseController } from "./BaseController";
import { Proceeding } from '../entity/Proceeding';


export class ProceedingController extends BaseController<Proceeding> {

  constructor() {
    super(Proceeding, true);
  }
  
  async save(request: Request) {
    let _proceeding = <Proceeding>request.body;

    super.isRequired(_proceeding.proceedingName, 'O nome do procedimento é obrigatório');
    super.isRequired(_proceeding.value, 'O valor do procedimento é obrigatório');

    return super.save(_proceeding, request);
  }
}
