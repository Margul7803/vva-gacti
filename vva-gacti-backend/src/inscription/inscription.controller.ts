import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InscriptionService } from './inscription.service';
import { CreateInscriptionDto } from './dto/create-inscription.dto';
import { UpdateInscriptionDto } from './dto/update-inscription.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { InscriptionEntity } from './entities/inscription.entity';

@ApiTags('inscription')
@Controller('inscription')
export class InscriptionController {
  constructor(private readonly inscriptionService: InscriptionService) {}

  @Post()
  @ApiCreatedResponse({
    type: InscriptionEntity,
    description: 'Create inscription',
  })
  @ApiOperation({
    summary: 'Create inscription',
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid inscription value',
  })
  create(@Body() createInscriptionDto: CreateInscriptionDto) {
    return this.inscriptionService.create(createInscriptionDto);
  }

  @Get()
  findAll() {
    return this.inscriptionService.findAll();
  }

  @Get(':noInscrip')
  findOne(@Param('noInscrip') noInscrip: string) {
    return this.inscriptionService.findOne(noInscrip);
  }

  @Patch(':noInscrip')
  @ApiOperation({
    summary: "Update a single inscription identified by it's noInscrip",
  })
  @ApiParam({
    name: 'noInscrip',
    type: 'string',
    description: 'Enter a inscription noInscrip',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Inscription value updated',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid inscription value',
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiResponse({
    status: 404,
    description: 'Inscription not found',
  })
  @ApiOkResponse({
    type: InscriptionEntity,
    isArray: true,
    description: 'Update inscription',
  })
  update(
    @Param('noInscrip') noInscrip: string,
    @Body() updateInscriptionDto: UpdateInscriptionDto,
  ) {
    return this.inscriptionService.update(noInscrip, updateInscriptionDto);
  }

  @Delete(':noInscrip')
  @ApiOperation({
    summary:
      "Delete a single activite identified by it's codeAnimation and date",
  })
  @ApiParam({
    name: 'noInscrip',
    type: 'string',
    description: 'Enter a inscription noInscrip',
    required: true,
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiResponse({
    status: 404,
    description: 'Activite not found',
  })
  @ApiOkResponse({
    type: InscriptionEntity,
    isArray: true,
    description: 'Delete activite',
  })
  remove(@Param('noInscrip') noInscrip: string) {
    return this.inscriptionService.remove(noInscrip);
  }
}
