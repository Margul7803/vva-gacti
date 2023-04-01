import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class InscriptionEntity {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  noInscrip: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty()
  dateAnnule: Date;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  dateInscrip: Date;

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
  username: string;
}
