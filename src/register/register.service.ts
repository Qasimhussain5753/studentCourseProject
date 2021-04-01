import {ConflictException, HttpException, HttpStatus, Injectable, InternalServerErrorException} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Register } from './register.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from './register.dto';
import { Courses } from '../courses/course.entity';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Register)
    private registoryRepository: Repository<Register>,
    @InjectRepository(Courses)
    private courseRepository: Repository<Courses>,
  ) {}

  async showAll() {
    return await this.registoryRepository.find();
  }

  async create(data: RegisterDto) {
    const { studentID, courseID } = data;
    const register = await this.registoryRepository.find();
    const course = await this.courseRepository.find();
    // for (const key in course) {
    //   if (course[key].id === id) {
    //     if (studentlimit > course[key].studentlimits) {
    //       const data = {
    //         ...course[key],
    //         message: 'Student Limit is reached',
    //       };
    //       return data;
    //     }
    //   }
    // }
    try {
      if (register.length > 5) {
        return { message: 'student can register only 6 courses' };
      } else if (register.length <= 6) {
        const registerCourses = await this.registoryRepository.create(data);
        await this.registoryRepository.save(registerCourses);
        const createData = {
          ...registerCourses,
          message: 'Register Successfully',
        };
        return createData;
      }
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Student cannot register twice a course');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async update(id: string) {
    const registerCourse = this.registoryRepository.findOne(id);
    if (!registerCourse) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    } else if (registerCourse) {
      const data = {
        ...registerCourse,
        message: 'Data updated Successfully!',
      };
      return data;
    }
  }

  async delete(id: string) {
    const registerCourse = this.registoryRepository.findOne(id);
    if (!registerCourse) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    } else if (registerCourse) {
      const data = {
        ...registerCourse,
        message: 'Data deleted successfully',
      };
      return data;
    }
  }

  async read(id: string) {
    const registerCourse = this.registoryRepository.findOne(id);
    if (!registerCourse) {
      throw new HttpException('Data not Found', HttpStatus.NOT_FOUND);
    }
    return registerCourse;
  }
}
