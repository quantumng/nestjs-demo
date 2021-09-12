import { Test, TestingModule } from '@nestjs/testing';
import { ProjectManageService } from './project-manage.service';

describe('ProjectManageService', () => {
    let service: ProjectManageService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProjectManageService],
        }).compile();

        service = module.get<ProjectManageService>(ProjectManageService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
