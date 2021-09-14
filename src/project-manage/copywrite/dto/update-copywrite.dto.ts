import { PartialType } from '@nestjs/mapped-types';
import { CreateCopywriteDto } from './create-copywrite.dto';

export class UpdateCopywriteDto extends PartialType(CreateCopywriteDto) {}
