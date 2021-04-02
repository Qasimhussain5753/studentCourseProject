import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'admin',
  port: 5432,
  host: '127.0.0.1',
  database: 'courseregistration',
  synchronize: true,
  autoLoadEntities: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
