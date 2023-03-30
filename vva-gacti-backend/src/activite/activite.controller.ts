import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ActiviteService } from './activite.service';
import { CreateActiviteDto } from './dto/create-activite.dto';
import { UpdateActiviteDto } from './dto/update-activite.dto';
import { ActiviteEntity } from './entities/activite.entity';

@ApiTags('activite')
@Controller('activite')
export class ActiviteController {
  constructor(private readonly activiteService: ActiviteService) {}

  @Post()
  @ApiCreatedResponse({
    type: ActiviteEntity,
    description: 'Create activite',
  })
  @ApiOperation({
    summary: 'Create activite',
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid activite value',
  })
  create(@Body() createActiviteDto: CreateActiviteDto) {
    return this.activiteService.create(createActiviteDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get activite list',
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiOkResponse({
    type: ActiviteEntity,
    isArray: true,
    description: 'Get activite list',
  })
  findAll() {
    return this.activiteService.findAll();
  }

  @Get(':codeAnimation/:dateActivite')
  @ApiOperation({
    summary: "Get a single activite identified by it's codeAnimation and date",
  })
  @ApiParam({
    name: 'codeAnimation',
    type: 'string',
    description: 'Enter an activite codeAnimation',
    required: true,
  })
  @ApiParam({
    name: 'dateActivite',
    type: 'string',
    description: 'Enter a date activite',
    required: true,
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiResponse({
    status: 404,
    description: 'Activite not found',
    isArray: true,
  })
  findOne(
    @Param('codeAnimation') codeAnimation: string,
    @Param('dateActivite') dateActivite: string,
  ) {
    return this.activiteService.findOne(codeAnimation, dateActivite);
  }

  @Patch(':codeAnimation/:dateActivite')
  @ApiOperation({
    summary:
      "Update a single activite identified by it's codeAnimation and date",
  })
  @ApiParam({
    name: 'codeAnimation',
    type: 'string',
    description: 'Enter a activite codeAnimation',
    required: true,
  })
  @ApiParam({
    name: 'dateActivite',
    type: 'string',
    description: 'Enter a date activite',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Activite value updated',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid activite value',
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
    type: ActiviteEntity,
    isArray: true,
    description: 'Update activite',
  })
  update(
    @Param('codeAnimation') codeAnimation: string,
    @Param('dateActivite') dateActivite: string,
    @Body() updateActiviteDto: UpdateActiviteDto,
  ) {
    return this.activiteService.update(
      codeAnimation,
      dateActivite,
      updateActiviteDto,
    );
  }

  @Delete(':codeAnimation/:dateActivite')
  @ApiOperation({
    summary:
      "Delete a single activite identified by it's codeAnimation and date",
  })
  @ApiParam({
    name: 'codeAnimation',
    type: 'string',
    description: 'Enter a activite codeAnimation',
    required: true,
  })
  @ApiParam({
    name: 'dateActivite',
    type: 'string',
    description: 'Enter a date activite',
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
    type: ActiviteEntity,
    isArray: true,
    description: 'Delete activite',
  })
  remove(
    @Param('codeAnimation') codeAnimation: string,
    @Param('dateActivite') dateActivite: string,
  ) {
    return this.activiteService.remove(codeAnimation, dateActivite);
  }
}
