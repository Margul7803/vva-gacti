import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ActiviteEntity {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  codeAnimation: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  codeEtatid: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  heureRendezVous: Date;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  heureDebut: Date;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  heureFin: Date;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  prix: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nomResponsable: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  prenomResponsable: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty()
  dateAnnule?: Date;
}
