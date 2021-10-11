import { Controller, Get, Req, Query, Param, Post, Body } from '@nestjs/common';
import { Request, query } from 'express';
import { ProjectManageService } from './project-manage.service';
import { CreateDto } from './dto/create.dto';
// import { Project } from './interfaces/project.interface';
import { ProjectManage } from './project-manage.entity';

@Controller('project-manage')
export class ProjectManageController {
    constructor(private readonly projectManageService: ProjectManageService) {}

    @Post()
    async createProject(@Body() params: CreateDto): Promise<any> {
        await this.projectManageService.createProject(params);
        return true;
    }

    @Get()
    getProjectManage(): Promise<ProjectManage[]> {
        return this.projectManageService.getProjects();
    }
}
