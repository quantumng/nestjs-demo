import { Injectable } from '@nestjs/common';
import { Project } from './interfaces/project.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectManage } from './project-manage.entity';

@Injectable()
export class ProjectManageService {
    private readonly projects: Project[] = [];

    constructor(
        @InjectRepository(ProjectManage)
        private projectManageRepository: Repository<ProjectManage>,
    ) {}

    createProject(project: Project) {
        return this.projectManageRepository.save(project);
    }

    getProjects(): Promise<ProjectManage[]> {
        return this.projectManageRepository.find();
    }
}
