import { Repository } from 'typeorm';
import { Courses } from './course.entity';
import { CoursesDto } from './courses.dto';
export declare class CoursesService {
    private courseRepository;
    constructor(courseRepository: Repository<Courses>);
    showAll(): Promise<Courses[]>;
    create(data: CoursesDto): Promise<Courses>;
    read(id: string): Promise<Courses>;
    update(id: string, data: Partial<CoursesDto>): Promise<Courses>;
    delete(id: string): Promise<Courses>;
}
