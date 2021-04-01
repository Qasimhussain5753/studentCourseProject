import { CoursesService } from './courses.service';
import { CoursesDto } from './courses.dto';
export declare class CoursesController {
    private coursesService;
    constructor(coursesService: CoursesService);
    showAllCourses(): Promise<import("./course.entity").Courses[]>;
    createCourse(data: CoursesDto): Promise<import("./course.entity").Courses>;
    getOneCourse(id: string): Promise<import("./course.entity").Courses>;
    updateCourse(id: string, data: Partial<CoursesDto>): Promise<import("./course.entity").Courses>;
    deleteCourse(id: string): Promise<import("./course.entity").Courses>;
}
