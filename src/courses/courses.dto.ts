import { IsString, IsNumber, Length, IsEmail } from 'class-validator';

export class CoursesDto {
  id: number;
  @IsString()
  course_name: string;
  @IsNumber()
  studentlimits: number;
}
