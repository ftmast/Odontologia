import { Request } from 'express';
import { BaseController } from "./BaseController";
import { AnamnesisPatientAnswers } from '../entity/AnamnesisPatientAnswers';


export class AnamnesisPatientAnswersController extends BaseController<AnamnesisPatientAnswers> {

  constructor() {
    super(AnamnesisPatientAnswers, true);
  }
  
  async save(request: Request) {
    let _anamnesisPatientAnswers = <AnamnesisPatientAnswers>request.body;

    super.isRequired(_anamnesisPatientAnswers.anamnesis, 'Informe o Anamnesea referente as resposta');
    super.isRequired(_anamnesisPatientAnswers.anamnesisQuestions, 'Informe o questionamento referente a resposta');
    super.isRequired(_anamnesisPatientAnswers.answerOption, 'A resposta é obrigatória');
    
    return super.save(_anamnesisPatientAnswers, request);
  }
}
