import { Repository } from 'typeorm';
import { Register } from './register.entity';
import { RegisterDto } from './register.dto';
import { Courses } from '../courses/course.entity';
export declare class RegisterService {
    private registoryRepository;
    private courseRepository;
    constructor(registoryRepository: Repository<Register>, courseRepository: Repository<Courses>);
    showAll(): Promise<Register[]>;
    create(data: RegisterDto): Promise<{
        message: string;
        id: number;
        studentID: number;
        courseID: number;
    } | {
        message: string;
    }>;
    update(id: string): Promise<Register>;
    delete(id: string): Promise<Register>;
    read(id: string): Promise<Register>;
}
