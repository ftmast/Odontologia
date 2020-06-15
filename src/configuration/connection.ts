import { Customer } from '../entity/Customer';
import { Question } from './../entity/Question';
import { SubCategory } from './../entity/SubCategory';
import { Category } from './../entity/Category';
import { User } from './../entity/User';
import { createConnection } from "typeorm";
import { ServiceProvider } from '../entity/ServiceProvider';
import { RequestOrder } from '../entity/RequestOrder';
import { RequestOrderAnswer } from '../entity/RequestOrderAnswer';
import { Anamnesis } from '../entity/Anamnesis';
import { AnamnesisController } from '../controller/AnamnesisController';
import { AnamnesisPatientAnswers } from '../entity/AnamnesisPatientAnswers';
import { AnamnesisQuestions } from '../entity/AnamnesisQuestions';
import { Dentist } from '../entity/Dentist';
import { Estimate } from '../entity/Estimate';
import { Patient } from '../entity/Patient';
import { Proceeding } from '../entity/Proceeding';
import { Scheduling } from '../entity/Scheduling';
import { ProceedingEstimate } from '../entity/ProceedingEstimate';

const cfg = require('../../ormconfig.json');

export default {
  createConnection: async () => {
    await createConnection(
      {
        type: cfg.type,
        host: cfg.host,
        port: cfg.port,
        username: cfg.username,
        password: cfg.password,
        database: cfg.database,
        synchronize: true,
        logging: false,
        entities: [
          Anamnesis,
          AnamnesisPatientAnswers,
          AnamnesisQuestions,
          Dentist,
          Estimate,
          Patient,
          Proceeding,
          Scheduling,
          User,
          ProceedingEstimate

          /*User,
          Category,
          SubCategory,
          Question,
          Customer, 
          ServiceProvider,
          RequestOrder,
          RequestOrderAnswer*/
        ]
      }
    );
    console.log('Database connected');
  }
}