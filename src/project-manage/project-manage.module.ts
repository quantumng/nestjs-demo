import { Module } from '@nestjs/common';
import { ProjectManageService } from './project-manage.service';
import { ProjectManageController } from './project-manage.controller';

@Module({
    controllers: [ProjectManageController],
    providers: [ProjectManageService],
})
export class ProjectManageModule {}
