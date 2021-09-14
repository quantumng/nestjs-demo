import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CopywriteService } from './copywrite.service';
import { CreateCopywriteDto } from './dto/create-copywrite.dto';
import { UpdateCopywriteDto } from './dto/update-copywrite.dto';

@Controller('copywrite')
export class CopywriteController {
  constructor(private readonly copywriteService: CopywriteService) {}

  @Post()
  create(@Body() createCopywriteDto: CreateCopywriteDto) {
    return this.copywriteService.create(createCopywriteDto);
  }

  @Get()
  findAll() {
    return this.copywriteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.copywriteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCopywriteDto: UpdateCopywriteDto) {
    return this.copywriteService.update(+id, updateCopywriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.copywriteService.remove(+id);
  }
}
