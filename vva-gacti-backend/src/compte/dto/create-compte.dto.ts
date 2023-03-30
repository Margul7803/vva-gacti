import { ApiProperty } from '@nestjs/swagger';
import { Profil } from '@prisma/client';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateCompteDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  prenom: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  dateInscr: Date;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  dateFerm: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  type: Profil;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  dateDebutSej: Date;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  dateFinSej: Date;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  dateNais: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  mail: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  tel: string;
}
