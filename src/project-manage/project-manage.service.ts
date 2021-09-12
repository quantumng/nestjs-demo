import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectManageService {
    getProjectManage(): string {
        return 'this is a project';
    }
}
