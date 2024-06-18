import { Controller, Get } from '@nestjs/common';
import { AppService } from 'apps/airtable/src/app.service';

@Controller('/airtable')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/todo')
  async getTodoList() {
    return this.appService.getTodoList();
  }
}
