import { Injectable } from '@nestjs/common';
import { CreateCopywriteDto } from './dto/create-copywrite.dto';
import { UpdateCopywriteDto } from './dto/update-copywrite.dto';

@Injectable()
export class CopywriteService {
  create(createCopywriteDto: CreateCopywriteDto) {
    return 'This action adds a new copywrite';
  }

  findAll() {
    return `This action returns all copywrite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} copywrite`;
  }

  update(id: number, updateCopywriteDto: UpdateCopywriteDto) {
    return `This action updates a #${id} copywrite`;
  }

  remove(id: number) {
    return `This action removes a #${id} copywrite`;
  }
}
