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
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 500 }),
        __metadata("design:type", String)
    ], Category.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 1000, nullable: true }),
        __metadata("design:type", String)
    ], Category.prototype, "description", void 0);
    Category = __decorate([
        typeorm_1.Entity({ name: 'Category' })
    ], Category);
    return Category;
}(BaseEntity_1.BaseEntity));
exports.Category = Category;
//# sourceMappingURL=Category.js.map