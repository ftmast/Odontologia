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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEntity_1 = require("./BaseEntity");
var typeorm_1 = require("typeorm");
var Patient_1 = require("./Patient");
var ToothType_1 = require("./enum/ToothType");
var Anamnesis = /** @class */ (function (_super) {
    __extends(Anamnesis, _super);
    function Anamnesis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return Patient_1.Patient; }, { eager: true }) //AutoPopulate
        ,
        __metadata("design:type", Patient_1.Patient)
    ], Anamnesis.prototype, "patient", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Anamnesis.prototype, "toothType", void 0);
    Anamnesis = __decorate([
        typeorm_1.Entity({ name: 'Anamnesis' })
    ], Anamnesis);
    return Anamnesis;
}(BaseEntity_1.BaseEntity));
exports.Anamnesis = Anamnesis;
//# sourceMappingURL=Anamnesis.js.map