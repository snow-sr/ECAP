import { NestFactory } from '@nestjs/core';
import { CourseModule } from './courses/course.module';

async function bootstrap() {
  const app = await NestFactory.create(CourseModule);
  await app.listen(8087);
}
bootstrap();
