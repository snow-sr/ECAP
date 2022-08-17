import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller()
export class CourseController {
  constructor(private readonly CourseService: CourseService) {}

  @Get('/course/:id')
  async solve(@Param('id') params: number): Promise<any> {
    return await this.CourseService.getInfo(params);
  }
}
