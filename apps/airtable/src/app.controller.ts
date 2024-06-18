import { Controller, Get } from '@nestjs/common';
import { AppService } from 'apps/airtable/src/app.service';

@Controller('/airtable')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return 'Akkimi backoffice';
  }

  @Get('/challenge')
  async getChallengeList() {
    return this.appService.getChallengeList();
  }
}
