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
var RequestOrder_1 = require("./RequestOrder");
var Question_1 = require("./Question");
var RequestOrderAnswer = /** @class */ (function (_super) {
    __extends(RequestOrderAnswer, _super);
    function RequestOrderAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: false }),
        __metadata("design:type", String)
    ], RequestOrderAnswer.prototype, "answer", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return RequestOrder_1.RequestOrder; }, { eager: true }) //AutoPopulate
        ,
        __metadata("design:type", RequestOrder_1.RequestOrder)
    ], RequestOrderAnswer.prototype, "requestOrder", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Question_1.Question; }, { eager: true }) //AutoPopulate
        ,
        __metadata("design:type", Question_1.Question)
    ], RequestOrderAnswer.prototype, "question", void 0);
    RequestOrderAnswer = __decorate([
        typeorm_1.Entity({ name: 'RequestAnswer' })
    ], RequestOrderAnswer);
    return RequestOrderAnswer;
}(BaseEntity_1.BaseEntity));
exports.RequestOrderAnswer = RequestOrderAnswer;
//# sourceMappingURL=RequestOrderAnswer.js.map