import { Injectable } from '@nestjs/common';
import { Project } from './interfaces/project.interface';

@Injectable()
export class ProjectManageService {
    private readonly projects: Project[] = [];

    createProject(project: Project) {
        this.projects.push(project);
    }

    getProjects(): Project[] {
        return this.projects;
    }
}
