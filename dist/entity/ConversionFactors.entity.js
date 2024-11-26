"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
exports.ConversionFactor = void 0;
var typeorm_1 = require("typeorm");
var Categories_entity_1 = require("./Categories.entity");
var Cutouts_entity_1 = require("./Cutouts.entity");
var Produce_entity_1 = require("./Produce.entity");
var Common_entity_1 = require("./Common.entity");
var ConversionFactor = /** @class */ (function (_super) {
    __extends(ConversionFactor, _super);
    function ConversionFactor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Categories_entity_1.Category; }, function (category) { return category.conversionFactors; }, { cascade: true, onDelete: "CASCADE", onUpdate: "CASCADE" }),
        __metadata("design:type", Categories_entity_1.Category)
    ], ConversionFactor.prototype, "Category", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Produce_entity_1.Produce; }, function (produce) { return produce.conversionFactors; }, { cascade: true, onDelete: "CASCADE", onUpdate: "CASCADE" }),
        __metadata("design:type", Produce_entity_1.Produce)
    ], ConversionFactor.prototype, "Produce", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Cutouts_entity_1.Cutout; }, function (cutout) { return cutout.conversionFactors; }, { cascade: true, onDelete: "CASCADE", onUpdate: "CASCADE" }),
        __metadata("design:type", Cutouts_entity_1.Cutout)
    ], ConversionFactor.prototype, "Cutout", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "float" }),
        __metadata("design:type", Number)
    ], ConversionFactor.prototype, "ConversionFactor", void 0);
    ConversionFactor = __decorate([
        (0, typeorm_1.Entity)({ name: "ConversionFactors" }),
        (0, typeorm_1.Unique)(["Category", "Produce", "Cutout"])
    ], ConversionFactor);
    return ConversionFactor;
}(Common_entity_1.CommonEntity));
exports.ConversionFactor = ConversionFactor;
//# sourceMappingURL=ConversionFactors.entity.js.map