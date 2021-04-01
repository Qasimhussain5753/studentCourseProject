import { RegisterService } from './register.service';
import { RegisterDto } from './register.dto';
import { Register } from './register.entity';
export declare class RegisterController {
    private registerService;
    constructor(registerService: RegisterService);
    getAllRegisterCourse(): Promise<Register[]>;
    createRegisterCourse(body: RegisterDto): Promise<{
        message: string;
        id: number;
        studentID: number;
        courseID: number;
    } | {
        message: string;
    }>;
    updateRegisterCourse(id: string): Promise<Register>;
    delete(id: string): Promise<Register>;
}
