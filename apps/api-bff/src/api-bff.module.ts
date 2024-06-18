import { Module } from '@nestjs/common';
import { ApiBffController } from './api-bff.controller';
import { ApiBffService } from './api-bff.service';

@Module({
  imports: [],
  controllers: [ApiBffController],
  providers: [ApiBffService],
})
export class ApiBffModule {}
