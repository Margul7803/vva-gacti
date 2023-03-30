import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateAnimationDto } from './create-animation.dto';

export class UpdateAnimationDto extends PartialType(CreateAnimationDto) {}
