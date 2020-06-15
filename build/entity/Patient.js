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
var Gender_1 = require("./enum/Gender");
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 255 }),
        __metadata("design:type", String)
    ], Patient.prototype, "patientName", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 20 }),
        __metadata("design:type", String)
    ], Patient.prototype, "cellPhone", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 14, nullable: true }),
        __metadata("design:type", String)
    ], Patient.prototype, "cpf_cnpj", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 20, nullable: true }),
        __metadata("design:type", String)
    ], Patient.prototype, "rg", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Patient.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column({ type: "text", nullable: true }),
        __metadata("design:type", String)
    ], Patient.prototype, "comments", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 100, nullable: true }),
        __metadata("design:type", String)
    ], Patient.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 20 }),
        __metadata("design:type", String)
    ], Patient.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 9, nullable: true }),
        __metadata("design:type", String)
    ], Patient.prototype, "cep", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 500, nullable: true }),
        __metadata("design:type", String)
    ], Patient.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 200, nullable: true }),
        __metadata("design:type", String)
    ], Patient.prototype, "neighborhood", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 200, nullable: true }),
        __metadata("design:type", String)
    ], Patient.prototype, "addressComplement", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 100, nullable: true }),
        __metadata("design:type", String)
    ], Patient.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 5, nullable: true }),
        __metadata("design:type", String)
    ], Patient.prototype, "state", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 5 }),
        __metadata("design:type", String)
    ], Patient.prototype, "healthInsurance", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 20 }),
        __metadata("design:type", String)
    ], Patient.prototype, "cardNumberHI", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 20 }),
        __metadata("design:type", String)
    ], Patient.prototype, "holderHI", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 11 }),
        __metadata("design:type", String)
    ], Patient.prototype, "cpfHolderHI", void 0);
    Patient = __decorate([
        typeorm_1.Entity({ name: 'Patient' })
    ], Patient);
    return Patient;
}(BaseEntity_1.BaseEntity));
exports.Patient = Patient;
//# sourceMappingURL=Patient.js.map