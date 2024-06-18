import { Test, TestingModule } from '@nestjs/testing';
import { ApiBffController } from './api-bff.controller';
import { ApiBffService } from './api-bff.service';

describe('ApiBffController', () => {
  let apiBffController: ApiBffController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiBffController],
      providers: [ApiBffService],
    }).compile();

    apiBffController = app.get<ApiBffController>(ApiBffController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiBffController.getHello()).toBe('Hello World!');
    });
  });
});
