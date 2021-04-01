import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Courses } from './course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursesDto } from './courses.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Courses)
    private courseRepository: Repository<Courses>,
  ) {}

  async showAll() {
    return await this.courseRepository.find();
  }

  async create(data: CoursesDto) {
    const course = await this.courseRepository.create(data);
    await this.courseRepository.save(course);
    return course;
  }

  async read(id: string) {
    const course = await this.courseRepository.findOne({ where: { id: id } });
    if (!course) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    return course;
  }

  async update(id: string, data: Partial<CoursesDto>) {
    const course = await this.courseRepository.findOne({ where: { id } });
    if (!course) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    await this.courseRepository.update(id, data);
    return await this.courseRepository.findOne(id);
  }
  async delete(id: string) {
    const course = await this.courseRepository.findOne({ where: { id } });
    if (!course) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    await this.courseRepository.delete(id);
    return course;
  }
}
