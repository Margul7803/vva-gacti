import { ApiProperty } from '@nestjs/swagger';
import { Activite } from '@prisma/client';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAnimationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  codeAnimation: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  codeTypeid: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nom: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  nbPlaceDispo: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  commentaire: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  limiteAge: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  difficulte: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  dateCreation: Date;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  dateValidite: Date;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  duree: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  tarif: number;

  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  listActivite?: Activite[];
}
