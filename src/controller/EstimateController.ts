import { Request } from 'express';
import { BaseController } from "./BaseController";
import { Estimate } from '../entity/Estimate';


export class EstimateController extends BaseController<Estimate> {

  constructor() {
    super(Estimate, true);
  }
  
  async save(request: Request) {
    let _estimate = <Estimate>request.body;

    super.isRequired(_estimate.patient.uid, 'O paciente que está sendo realizado o orçamento é obrigatório');
    super.isRequired(_estimate.dentist.uid, 'O dentista que está realizando o orçamento é obrigatório');
    super.isRequired(_estimate.proceedingEstimate, 'O procedimento do orçamento é obrigatório');
    super.isRequired(_estimate.estimateName, 'O orçamento é obrigatório');
    super.isRequired(_estimate.estimateDate, 'A data do orçamento do paciente é obrigatório');

    return super.save(_estimate, request);
  }
}
