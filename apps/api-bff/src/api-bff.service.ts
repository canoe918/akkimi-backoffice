import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiBffService {
  getHello(): string {
    return 'Hello World!';
  }
}
