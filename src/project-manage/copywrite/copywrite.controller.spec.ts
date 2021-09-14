import { Test, TestingModule } from '@nestjs/testing';
import { CopywriteController } from './copywrite.controller';
import { CopywriteService } from './copywrite.service';

describe('CopywriteController', () => {
  let controller: CopywriteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CopywriteController],
      providers: [CopywriteService],
    }).compile();

    controller = module.get<CopywriteController>(CopywriteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
