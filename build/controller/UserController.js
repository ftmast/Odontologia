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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var User_1 = require("../entity/User");
var BaseController_1 = require("./BaseController");
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = require("../configuration/config");
var md5 = require("md5");
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        return _super.call(this, User_1.User) || this;
    }
    UserController.prototype.auth = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, user, _payload;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, email = _a.email, password = _a.password;
                        if (!email || !password)
                            return [2 /*return*/, { status: 400, message: 'Informe o email e a senha para efetuar o login' }];
                        return [4 /*yield*/, this.repostitory.findOne({ email: email, password: md5(password) })];
                    case 1:
                        user = _b.sent();
                        if (user) {
                            _payload = {
                                uid: user.uid,
                                name: user.name,
                                photo: user.photo,
                                email: user.email
                            };
                            return [2 /*return*/, {
                                    status: 200,
                                    message: {
                                        user: _payload,
                                        token: jsonwebtoken_1.sign(__assign({}, _payload, { tm: new Date().getTime() }), config_1.default.secretyKey)
                                    }
                                }];
                        }
                        else
                            return [2 /*return*/, { status: 404, message: 'E-mail ou senha inválidos' }];
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.createUser = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, photo, email, password, confirmPassword, isRoot, _user;
            return __generator(this, function (_b) {
                _a = request.body, name = _a.name, photo = _a.photo, email = _a.email, password = _a.password, confirmPassword = _a.confirmPassword, isRoot = _a.isRoot;
                _super.prototype.isRequired.call(this, name, 'Informe o nome');
                _super.prototype.isRequired.call(this, photo, 'Informe a foto');
                _super.prototype.isRequired.call(this, email, 'Informe o e-mail');
                _super.prototype.isRequired.call(this, password, 'Informe a senha');
                _super.prototype.isRequired.call(this, confirmPassword, 'Informe a confirmação da senha');
                _user = new User_1.User();
                _user.name = name;
                _user.photo = photo;
                _user.email = email;
                if (password != confirmPassword)
                    return [2 /*return*/, { status: 400, errors: ['A senha e a confirmação são diferente'] }];
                if (password)
                    _user.password = md5(password);
                _user.isRoot = isRoot;
                return [2 /*return*/, _super.prototype.save.call(this, _user, request, true)];
            });
        });
    };
    UserController.prototype.save = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _user;
            return __generator(this, function (_a) {
                _user = request.body;
                _super.prototype.isRequired.call(this, _user.name, 'O nome do usuário é obrigatório');
                _super.prototype.isRequired.call(this, _user.photo, 'A foto do usuário é obrigatória');
                return [2 /*return*/, _super.prototype.save.call(this, _user, request)];
            });
        });
    };
    return UserController;
}(BaseController_1.BaseController));
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map