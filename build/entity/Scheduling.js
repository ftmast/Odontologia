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
var Dentist_1 = require("./Dentist");
var Patient_1 = require("./Patient");
var Scheduling = /** @class */ (function (_super) {
    __extends(Scheduling, _super);
    function Scheduling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return Patient_1.Patient; }, { eager: true }) //AutoPopulate
        ,
        __metadata("design:type", Patient_1.Patient)
    ], Scheduling.prototype, "patient", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Dentist_1.Dentist; }, { eager: true }) //AutoPopulate
        ,
        __metadata("design:type", Dentist_1.Dentist)
    ], Scheduling.prototype, "dentist", void 0);
    __decorate([
        typeorm_1.Column({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Scheduling.prototype, "scheduleStart", void 0);
    __decorate([
        typeorm_1.Column({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Scheduling.prototype, "scheduleEnd", void 0);
    __decorate([
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], Scheduling.prototype, "miss", void 0);
    __decorate([
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], Scheduling.prototype, "reschedule", void 0);
    __decorate([
        typeorm_1.Column({ type: 'text', length: 255 }),
        __metadata("design:type", String)
    ], Scheduling.prototype, "comments", void 0);
    Scheduling = __decorate([
        typeorm_1.Entity({ name: 'Scheduling' })
    ], Scheduling);
    return Scheduling;
}(BaseEntity_1.BaseEntity));
exports.Scheduling = Scheduling;
//# sourceMappingURL=Scheduling.js.map