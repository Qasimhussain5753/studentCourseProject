import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import {Optional} from "@nestjs/common";

@Entity('register')
@Unique(['courseID'])
export class Register {
  @PrimaryGeneratedColumn()
  id:number;
  studentID: number;
  @Column({ type: 'numeric' })
  courseID: number;
}
