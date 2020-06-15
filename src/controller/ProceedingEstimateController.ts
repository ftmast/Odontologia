import { Request } from 'express';
import { BaseController } from "./BaseController";
import { ProceedingEstimate } from '../entity/ProceedingEstimate';


export class ProceedingEstimateController extends BaseController<ProceedingEstimate> {

  constructor() {
    super(ProceedingEstimate, true);
  }
  
  async save(request: Request) {
    let _proceedingEstimate = <ProceedingEstimate>request.body;

    super.isRequired(_proceedingEstimate.proceeding, 'O procedimento é obrigatório');
    super.isRequired(_proceedingEstimate.toothId, 'O numero do dente é obrigatório');

    return super.save(_proceedingEstimate, request);
  }
}
