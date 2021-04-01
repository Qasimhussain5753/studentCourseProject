import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDto } from './student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async showAll() {
    return await this.studentRepository.find();
  }

  async create(data: StudentDto) {
    const student = await this.studentRepository.create(data);
    const res = await this.studentRepository.save(student);
    if (res) {
      const data = {
        ...student,
        message: 'Data Added successfully!',
      };
      return data;
    }
  }

  async read(id: string) {
    const student = await this.studentRepository.findOne({ where: { id: id } });
    if (!student) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    return student;
  }

  async update(id: string, data: Partial<StudentDto>) {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new HttpException('STUDENT NOT FOUND', HttpStatus.NOT_FOUND);
    }
    const res = await this.studentRepository.update(id, data);
    if (res) {
      const updateData = await this.studentRepository.findOne(id);
      const data = {
        ...updateData,
        message: 'updated successfully',
      };
      return data;
    }
  }
  async delete(id: string) {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new HttpException('STUDENT NOT FOUND', HttpStatus.NOT_FOUND);
    }
    const deletedData = await this.studentRepository.delete(id);
    if (deletedData) {
      const response = {
        message: 'Deleted Successfully',
        data: {
          ...student,
        },
      };
      return response;
    }
  }
}
