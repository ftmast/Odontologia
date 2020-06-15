"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceProviderController_1 = require("./controller/ServiceProviderController");
var CustomerController_1 = require("./controller/CustomerController");
var SubCategoryController_1 = require("./controller/SubCategoryController");
var UserController_1 = require("./controller/UserController");
var CategoryController_1 = require("./controller/CategoryController");
var QuestionController_1 = require("./controller/QuestionController");
var RequestOrderController_1 = require("./controller/RequestOrderController");
var RequestOrderAnswerController_1 = require("./controller/RequestOrderAnswerController");
exports.Routes = [
    { method: "get", route: "/users", controller: UserController_1.UserController, action: "all" },
    { method: "get", route: "/users/:id", controller: UserController_1.UserController, action: "one" },
    { method: "post", route: "/users", controller: UserController_1.UserController, action: "save" },
    { method: "post", route: "/users/create", controller: UserController_1.UserController, action: "createUser" },
    { method: "post", route: "/users/auth", controller: UserController_1.UserController, action: "auth" },
    { method: "delete", route: "/users/:id", controller: UserController_1.UserController, action: "remove" },
    { method: "get", route: "/category", controller: CategoryController_1.CategoryController, action: "all" },
    { method: "get", route: "/category/:id", controller: CategoryController_1.CategoryController, action: "one" },
    { method: "post", route: "/category", controller: CategoryController_1.CategoryController, action: "save" },
    { method: "delete", route: "/category/:id", controller: CategoryController_1.CategoryController, action: "remove" },
    { method: "get", route: "/subcategory", controller: SubCategoryController_1.SubCategoryController, action: "all" },
    { method: "get", route: "/subcategory/:id", controller: SubCategoryController_1.SubCategoryController, action: "one" },
    { method: "post", route: "/subcategory", controller: SubCategoryController_1.SubCategoryController, action: "save" },
    { method: "delete", route: "/subcategory/:id", controller: SubCategoryController_1.SubCategoryController, action: "remove" },
    { method: "get", route: "/question", controller: QuestionController_1.QuestionController, action: "all" },
    { method: "get", route: "/question/:id", controller: QuestionController_1.QuestionController, action: "one" },
    { method: "post", route: "/question", controller: QuestionController_1.QuestionController, action: "save" },
    { method: "delete", route: "/question/:id", controller: QuestionController_1.QuestionController, action: "remove" },
    { method: "get", route: "/customer", controller: CustomerController_1.CustomerController, action: "all" },
    { method: "get", route: "/customer/:id", controller: CustomerController_1.CustomerController, action: "one" },
    { method: "post", route: "/customer", controller: CustomerController_1.CustomerController, action: "save" },
    { method: "post", route: "/customer/create", controller: CustomerController_1.CustomerController, action: "createCustomer" },
    { method: "delete", route: "/customer/:id", controller: CustomerController_1.CustomerController, action: "remove" },
    { method: "get", route: "/serviceProvider", controller: ServiceProviderController_1.ServiceProviderController, action: "all" },
    { method: "get", route: "/serviceProvider/:id", controller: ServiceProviderController_1.ServiceProviderController, action: "one" },
    { method: "post", route: "/serviceProvider", controller: ServiceProviderController_1.ServiceProviderController, action: "save" },
    { method: "post", route: "/serviceProvider/create", controller: ServiceProviderController_1.ServiceProviderController, action: "createServiceProvider" },
    { method: "delete", route: "/serviceProvider/:id", controller: ServiceProviderController_1.ServiceProviderController, action: "remove" },
    { method: "get", route: "/request", controller: RequestOrderController_1.RequestOrderController, action: "all" },
    { method: "get", route: "/request/:id", controller: RequestOrderController_1.RequestOrderController, action: "one" },
    { method: "post", route: "/request", controller: RequestOrderController_1.RequestOrderController, action: "save" },
    { method: "delete", route: "/request/:id", controller: RequestOrderController_1.RequestOrderController, action: "remove" },
    { method: "get", route: "/requestAnswer/:orderUid/all", controller: RequestOrderAnswerController_1.RequestOrderAnswerController, action: "all" },
    { method: "post", route: "/requestAnswer", controller: RequestOrderAnswerController_1.RequestOrderAnswerController, action: "save" },
    { method: "delete", route: "/requestAnswer/:id", controller: RequestOrderAnswerController_1.RequestOrderAnswerController, action: "remove" }
];
//# sourceMappingURL=routes.js.map