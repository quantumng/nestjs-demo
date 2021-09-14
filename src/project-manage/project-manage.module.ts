import { Module } from '@nestjs/common';
import { ProjectManageService } from './project-manage.service';
import { ProjectManageController } from './project-manage.controller';
import { CopywriteModule } from './copywrite/copywrite.module';

@Module({
    controllers: [ProjectManageController],
    providers: [ProjectManageService],
    imports: [CopywriteModule],
})
export class ProjectManageModule {}
