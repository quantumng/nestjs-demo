import { Test, TestingModule } from '@nestjs/testing';
import { ProjectManageController } from './project-manage.controller';
import { ProjectManageService } from './project-manage.service';

describe('ProjectManageController', () => {
    let controller: ProjectManageController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProjectManageController],
            providers: [ProjectManageService],
        }).compile();

        controller = module.get<ProjectManageController>(
            ProjectManageController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
