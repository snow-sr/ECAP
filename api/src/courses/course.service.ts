import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class CourseService {
  getInfo(id: string) {
    return prisma.course.findUnique({
      where: {
        id: id,
      },
    });
  }
}
