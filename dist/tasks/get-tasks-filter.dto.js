"use strict";
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
exports.getTaskFilterDto = void 0;
const task_module_1 = require("./task.module");
const class_validator_1 = require("class-validator");
class getTaskFilterDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], getTaskFilterDto.prototype, "search", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsIn([task_module_1.TaskStatus.OPEN, task_module_1.TaskStatus.IN_PROGRESS, task_module_1.TaskStatus.DONE]),
    __metadata("design:type", String)
], getTaskFilterDto.prototype, "status", void 0);
exports.getTaskFilterDto = getTaskFilterDto;
//# sourceMappingURL=get-tasks-filter.dto.js.map