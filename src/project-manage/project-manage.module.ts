import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectManageService } from './project-manage.service';
import { ProjectManageController } from './project-manage.controller';
import { CopywriteModule } from './copywrite/copywrite.module';
import { ProjectManage } from './project-manage.entity';

@Module({
    controllers: [ProjectManageController],
    providers: [ProjectManageService],
    imports: [TypeOrmModule.forFeature([ProjectManage]), CopywriteModule],
})
export class ProjectManageModule {}
