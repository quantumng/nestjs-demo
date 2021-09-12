import { Controller, Get, Req, Query, Param, Post, Body } from '@nestjs/common';
import { Request, query } from 'express';
import { ProjectManageService } from './project-manage.service';
import { CreateDto } from './dto/create.dto';

@Controller('project-manage')
export class ProjectManageController {
    constructor(private readonly projectManageService: ProjectManageService) {}

    @Post('/info')
    async createProject(@Body() body: CreateDto): Promise<any> {
        console.log('request body', body);
        return 'create new project';
    }

    @Get()
    getProjectManage(): string {
        return this.projectManageService.getProjectManage();
    }

    @Get('/list/:id')
    getProjectList(@Query() query, @Param() params): string {
        console.log('request ab', query, params);
        return 'aaab';
    }
}