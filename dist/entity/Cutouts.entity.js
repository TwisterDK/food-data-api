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
exports.Cutout = void 0;
var typeorm_1 = require("typeorm");
var ConversionFactors_entity_1 = require("./ConversionFactors.entity");
var Common_entity_1 = require("./Common.entity");
var Cutout = /** @class */ (function (_super) {
    __extends(Cutout, _super);
    function Cutout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
        __metadata("design:type", String)
    ], Cutout.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ConversionFactors_entity_1.ConversionFactor; }, function (conversionFactor) { return conversionFactor.Cutout; }),
        __metadata("design:type", Array)
    ], Cutout.prototype, "conversionFactors", void 0);
    Cutout = __decorate([
        (0, typeorm_1.Entity)({ name: "Cutouts" }),
        (0, typeorm_1.Unique)(["name"])
    ], Cutout);
    return Cutout;
}(Common_entity_1.CommonEntity));
exports.Cutout = Cutout;
//# sourceMappingURL=Cutouts.entity.js.map