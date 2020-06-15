"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController_1 = require("./BaseController");
var md5 = require("md5");
var ServiceProvider_1 = require("../entity/ServiceProvider");
var ServiceProviderController = /** @class */ (function (_super) {
    __extends(ServiceProviderController, _super);
    function ServiceProviderController() {
        return _super.call(this, ServiceProvider_1.ServiceProvider, true) || this;
    }
    ServiceProviderController.prototype.validationDefault = function (_serviceProvider) {
        _super.prototype.isRequired.call(this, _serviceProvider.name, 'O nome é obrigatório');
        _super.prototype.isRequired.call(this, _serviceProvider.photo, 'A foto é obrigatória');
        _super.prototype.isRequired.call(this, _serviceProvider.email, 'E-mail é obrigatório');
        _super.prototype.isRequired.call(this, _serviceProvider.phone, 'Telefone é obrigatório');
        _super.prototype.isRequired.call(this, _serviceProvider.categoriesCare, 'Informe as categorias atendidas');
        _super.prototype.isRequired.call(this, _serviceProvider.citiesCare, 'Informe as cidades atendidas');
        _super.prototype.isRequired.call(this, _serviceProvider.zipCode, 'Informe o CEP');
        _super.prototype.isRequired.call(this, _serviceProvider.state, 'Informe o estado');
    };
    ServiceProviderController.prototype.save = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _serviceProvider;
            return __generator(this, function (_a) {
                _serviceProvider = request.body;
                this.validationDefault(_serviceProvider);
                delete _serviceProvider.password;
                return [2 /*return*/, _super.prototype.save.call(this, _serviceProvider, request)];
            });
        });
    };
    ServiceProviderController.prototype.createServiceProvider = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _serviceProvider, confirmPassword;
            return __generator(this, function (_a) {
                _serviceProvider = request.body;
                confirmPassword = request.body.confirmPassword;
                this.validationDefault(_serviceProvider);
                _super.prototype.isRequired.call(this, _serviceProvider.password, 'Informe sua senha');
                _super.prototype.isRequired.call(this, confirmPassword, 'A confirmação da senha é obrigatório');
                _super.prototype.isTrue.call(this, (_serviceProvider.password != confirmPassword), 'A senha e a confirmação de senha estão diferentes');
                if (_serviceProvider.password)
                    _serviceProvider.password = md5(_serviceProvider.password);
                return [2 /*return*/, _super.prototype.save.call(this, _serviceProvider, request, true)];
            });
        });
    };
    return ServiceProviderController;
}(BaseController_1.BaseController));
exports.ServiceProviderController = ServiceProviderController;
//# sourceMappingURL=ServiceProviderController.js.map