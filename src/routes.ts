import { ServiceProviderController } from './controller/ServiceProviderController';
import { CustomerController } from './controller/CustomerController';
import { SubCategoryController } from './controller/SubCategoryController';
import { UserController } from "./controller/UserController";
import { CategoryController } from "./controller/CategoryController";
import { QuestionController } from './controller/QuestionController';
import { RequestOrderController } from './controller/RequestOrderController';
import { RequestOrderAnswerController } from './controller/RequestOrderAnswerController';
import { PatientController } from './controller/PatientController';
import { AnamnesisQuestionsController } from './controller/AnamnesisQuestions';
import { ProceedingController } from './controller/ProceedingController';
import { DentistController } from './controller/DentistController';
import { SchedulingController } from './controller/SchedulingController';
import { EstimateController } from './controller/EstimateController';
import { ProceedingEstimateController } from './controller/ProceedingEstimateController';

export const Routes = [

    { method: "get", route: "/users", controller: UserController, action: "all" },
    { method: "get", route: "/users/:id", controller: UserController, action: "one" },
    { method: "post", route: "/users", controller: UserController, action: "save" },
    { method: "post", route: "/users/create", controller: UserController, action: "createUser" },
    { method: "post", route: "/users/auth", controller: UserController, action: "auth" },
    { method: "delete", route: "/users/:id", controller: UserController, action: "remove" },

    { method: "get", route: "/patient", controller: PatientController, action: "all" },
    { method: "get", route: "/patient/:id", controller: PatientController, action: "one" },
    { method: "post", route: "/patient", controller: PatientController, action: "save" },
    { method: "delete", route: "/patient/:id", controller: PatientController, action: "remove" },

    { method: "get", route: "/anamnesisquestion", controller: AnamnesisQuestionsController, action: "all" },
    { method: "get", route: "/anamnesisquestion/:id", controller: AnamnesisQuestionsController, action: "one" },
    { method: "post", route: "/anamnesisquestion", controller: AnamnesisQuestionsController, action: "save" },
    { method: "delete", route: "/anamnesisquestion/:id", controller: AnamnesisQuestionsController, action: "remove" },

    { method: "get", route: "/proceeding", controller: ProceedingController, action: "all" },
    { method: "get", route: "/proceeding/:id", controller: ProceedingController, action: "one" },
    { method: "post", route: "/proceeding", controller: ProceedingController, action: "save" },
    { method: "delete", route: "/proceeding/:id", controller: ProceedingController, action: "remove" },
    
    { method: "get", route: "/dentist", controller: DentistController, action: "all" },
    { method: "get", route: "/dentist/:id", controller: DentistController, action: "one" },
    { method: "post", route: "/dentist", controller: DentistController, action: "save" },
    { method: "delete", route: "/dentist/:id", controller: DentistController, action: "remove" },

    { method: "get", route: "/scheduling", controller: SchedulingController, action: "all" },
    { method: "get", route: "/scheduling/:id", controller: SchedulingController, action: "one" },
    { method: "post", route: "/scheduling", controller: SchedulingController, action: "save" },
    { method: "delete", route: "/scheduling/:id", controller: SchedulingController, action: "remove" },

    { method: "get", route: "/estimate", controller: EstimateController, action: "all" },
    { method: "get", route: "/estimate/:id", controller: EstimateController, action: "one" },
    { method: "post", route: "/estimate", controller: EstimateController, action: "save" },
    { method: "delete", route: "/estimate/:id", controller: EstimateController, action: "remove" },

    { method: "get", route: "/proceedingestimate", controller: ProceedingEstimateController, action: "all" },
    { method: "get", route: "/proceedingestimate/:id", controller: ProceedingEstimateController, action: "one" },
    { method: "post", route: "/proceedingestimate", controller: ProceedingEstimateController, action: "save" },
    { method: "delete", route: "/proceedingestimate/:id", controller: ProceedingEstimateController, action: "remove" }

    /*
    { method: "get", route: "/category", controller: CategoryController, action: "all" },
    { method: "get", route: "/category/:id", controller: CategoryController, action: "one" },
    { method: "post", route: "/category", controller: CategoryController, action: "save" },
    { method: "delete", route: "/category/:id", controller: CategoryController, action: "remove" },

    { method: "get", route: "/subcategory", controller: SubCategoryController, action: "all" },
    { method: "get", route: "/subcategory/:id", controller: SubCategoryController, action: "one" },
    { method: "post", route: "/subcategory", controller: SubCategoryController, action: "save" },
    { method: "delete", route: "/subcategory/:id", controller: SubCategoryController, action: "remove" },

    { method: "get", route: "/question", controller: QuestionController, action: "all" },
    { method: "get", route: "/question/:id", controller: QuestionController, action: "one" },
    { method: "post", route: "/question", controller: QuestionController, action: "save" },
    { method: "delete", route: "/question/:id", controller: QuestionController, action: "remove" }, 

    { method: "get", route: "/customer", controller: CustomerController, action: "all" },
    { method: "get", route: "/customer/:id", controller: CustomerController, action: "one" },
    { method: "post", route: "/customer", controller: CustomerController, action: "save" },
    { method: "post", route: "/customer/create", controller: CustomerController, action: "createCustomer" },
    { method: "delete", route: "/customer/:id", controller: CustomerController, action: "remove" },
    
    { method: "get", route: "/serviceProvider", controller: ServiceProviderController, action: "all" },
    { method: "get", route: "/serviceProvider/:id", controller: ServiceProviderController, action: "one" },
    { method: "post", route: "/serviceProvider", controller: ServiceProviderController, action: "save" },
    { method: "post", route: "/serviceProvider/create", controller: ServiceProviderController, action: "createServiceProvider" },
    { method: "delete", route: "/serviceProvider/:id", controller: ServiceProviderController, action: "remove" },
    
    { method: "get", route: "/request", controller: RequestOrderController, action: "all" },
    { method: "get", route: "/request/:id", controller: RequestOrderController, action: "one" },
    { method: "post", route: "/request", controller: RequestOrderController, action: "save" },
    { method: "delete", route: "/request/:id", controller: RequestOrderController, action: "remove" },

    { method: "get", route: "/requestAnswer/:orderUid/all", controller: RequestOrderAnswerController, action: "all" },
    { method: "post", route: "/requestAnswer", controller: RequestOrderAnswerController, action: "save" },
    { method: "delete", route: "/requestAnswer/:id", controller: RequestOrderAnswerController, action: "remove" }
*/
];