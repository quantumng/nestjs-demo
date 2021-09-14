import { Test, TestingModule } from '@nestjs/testing';
import { CopywriteService } from './copywrite.service';

describe('CopywriteService', () => {
  let service: CopywriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CopywriteService],
    }).compile();

    service = module.get<CopywriteService>(CopywriteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
