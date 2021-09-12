import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectManageModule } from './project-manage/project-manage.module';

@Module({
    // TypeOrmModule.forRoot()
    imports: [ProjectManageModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
