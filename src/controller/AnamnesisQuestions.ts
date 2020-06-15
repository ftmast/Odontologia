import { Request } from 'express';
import { BaseController } from "./BaseController";
import { AnamnesisQuestions } from '../entity/AnamnesisQuestions';


export class AnamnesisQuestionsController extends BaseController<AnamnesisQuestions> {

  constructor() {
    super(AnamnesisQuestions, true);
  }
  
  async save(request: Request) {
    let _anamnesisQuestions = <AnamnesisQuestions>request.body;

    super.isRequired(_anamnesisQuestions.question, 'A questão é obrigatória');

    return super.save(_anamnesisQuestions, request);
  }
}
