import { Module } from '@nestjs/common';
import { CopywriteService } from './copywrite.service';
import { CopywriteController } from './copywrite.controller';

@Module({
  controllers: [CopywriteController],
  providers: [CopywriteService]
})
export class CopywriteModule {}
