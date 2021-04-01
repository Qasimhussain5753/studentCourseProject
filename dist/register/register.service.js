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
exports.RegisterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const register_entity_1 = require("./register.entity");
const typeorm_2 = require("@nestjs/typeorm");
const course_entity_1 = require("../courses/course.entity");
let RegisterService = class RegisterService {
    constructor(registoryRepository, courseRepository) {
        this.registoryRepository = registoryRepository;
        this.courseRepository = courseRepository;
    }
    async showAll() {
        return await this.registoryRepository.find();
    }
    async create(data) {
        const { studentID, courseID } = data;
        const register = await this.registoryRepository.find();
        const course = await this.courseRepository.find();
        if (register.length > 5) {
            return { message: 'student can register only 6 courses' };
        }
        else if (register.length <= 6) {
            const registerCourses = await this.registoryRepository.create(data);
            await this.registoryRepository.save(registerCourses);
            const createData = Object.assign(Object.assign({}, registerCourses), { message: 'Register Successfully' });
            return createData;
        }
    }
    async update(id) {
        const registerCourse = this.registoryRepository.findOne(id);
        if (!registerCourse) {
            throw new common_1.HttpException('Data not found', common_1.HttpStatus.NOT_FOUND);
        }
        else if (registerCourse) {
            const data = Object.assign(Object.assign({}, registerCourse), { message: 'Data updated Successfully!' });
            return data;
        }
    }
    async delete(id) {
        const registerCourse = this.registoryRepository.findOne(id);
        if (!registerCourse) {
            throw new common_1.HttpException('Data not found', common_1.HttpStatus.NOT_FOUND);
        }
        else if (registerCourse) {
            const data = Object.assign(Object.assign({}, registerCourse), { message: 'Data deleted successfully' });
            return data;
        }
    }
    async read(id) {
        const registerCourse = this.registoryRepository.findOne(id);
        if (!registerCourse) {
            throw new common_1.HttpException('Data not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return registerCourse;
    }
};
RegisterService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(register_entity_1.Register)),
    __param(1, typeorm_2.InjectRepository(course_entity_1.Courses)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], RegisterService);
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map