import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { CoursesModule } from './courses/courses.module';
import { StudentModule } from './student/student.module';
import { HttpErrors } from './shared/http.errors';
import { RegisterModule } from './register/register.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConnectionService } from './database.connection.service';
@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(config),
    CoursesModule,
    StudentModule,
    RegisterModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrors,
    },
  ],
})
export class AppModule {}
