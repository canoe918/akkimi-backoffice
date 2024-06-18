import { Controller, Get } from '@nestjs/common';
import { ApiBffService } from './api-bff.service';

@Controller()
export class ApiBffController {
  constructor(private readonly apiBffService: ApiBffService) {}

  @Get()
  getHello(): string {
    return this.apiBffService.getHello();
  }
}
