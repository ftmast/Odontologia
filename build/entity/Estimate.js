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
var Proceeding_1 = require("./Proceeding");
var Estimate = /** @class */ (function (_super) {
    __extends(Estimate, _super);
    function Estimate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return Proceeding_1.Proceeding; }, { eager: true }) //AutoPopulate
        ,
        __metadata("design:type", Proceeding_1.Proceeding)
    ], Estimate.prototype, "proceeding", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 255 }),
        __metadata("design:type", String)
    ], Estimate.prototype, "estimateName", void 0);
    __decorate([
        typeorm_1.Column({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Estimate.prototype, "estimateDate", void 0);
    __decorate([
        typeorm_1.Column({ type: "int" }),
        __metadata("design:type", Number)
    ], Estimate.prototype, "toothId", void 0);
    Estimate = __decorate([
        typeorm_1.Entity({ name: 'Estimate' })
    ], Estimate);
    return Estimate;
}(BaseEntity_1.BaseEntity));
exports.Estimate = Estimate;
//# sourceMappingURL=Estimate.js.map