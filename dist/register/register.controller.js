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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const common_1 = require("@nestjs/common");
const register_service_1 = require("./register.service");
const register_dto_1 = require("./register.dto");
const validate_pipe_1 = require("../shared/validate.pipe");
let RegisterController = class RegisterController {
    constructor(registerService) {
        this.registerService = registerService;
    }
    getAllRegisterCourse() {
        return this.registerService.showAll();
    }
    createRegisterCourse(body) {
        return this.registerService.create(body);
    }
    updateRegisterCourse(id) {
        return this.registerService.update(id);
    }
    delete(id) {
        return this.registerService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "getAllRegisterCourse", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new validate_pipe_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "createRegisterCourse", null);
__decorate([
    common_1.Put(':id'),
    common_1.UsePipes(new validate_pipe_1.ValidationPipe()),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "updateRegisterCourse", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UsePipes(new validate_pipe_1.ValidationPipe()),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "delete", null);
RegisterController = __decorate([
    common_1.Controller('register'),
    __metadata("design:paramtypes", [register_service_1.RegisterService])
], RegisterController);
exports.RegisterController = RegisterController;
//# sourceMappingURL=register.controller.js.map