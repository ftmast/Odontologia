import { Request } from 'express';
import { BaseController } from "./BaseController";
import { Scheduling } from '../entity/Scheduling';


export class SchedulingController extends BaseController<Scheduling> {

  constructor() {
    super(Scheduling, true);
  }
  
  async save(request: Request) {
    let _scheduling = <Scheduling>request.body;
    super.isRequired(_scheduling.patient.uid, 'O paciente que está sendo agendado é obrigatório');
    super.isRequired(_scheduling.dentist.uid, 'O dentista que irá atender é obrigatório');
    super.isRequired(_scheduling.scheduleStart, 'A data e hora do agendamento é obrigatório');
    super.isRequired(_scheduling.scheduleEnd, 'A data e hora prevista para termino é obrigatório' );
    super.isRequired(_scheduling.hour, 'O horário é obrigatório' );
    super.isRequired(_scheduling.duration, 'A duração prevista é obrigatório' );
    
    return super.save(_scheduling, request);
  }
}
