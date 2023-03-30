import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ClassSerializerInterceptor,
  UseInterceptors,
  HttpCode,
} from '@nestjs/common';
import { CompteService } from './compte.service';
import { CreateCompteDto } from './dto/create-compte.dto';
import { UpdateCompteDto } from './dto/update-compte.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CompteEntity } from './entities/compte.entity';
import { Roles } from 'src/role/roles.decorator';
import { Profil } from '@prisma/client';
import { RolesGuard } from 'src/role/roles.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiSecurity('access-key')
@UseInterceptors(ClassSerializerInterceptor)
@Roles(Profil.ADMIN)
@ApiTags('compte')
@Controller('compte')
export class CompteController {
  constructor(private readonly compteService: CompteService) {}

  @Post()
  @ApiCreatedResponse({
    type: CompteEntity,
    description: 'Create User',
  })
  @ApiOperation({
    summary: 'Create user',
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid user value',
  })
  create(@Body() createCompteDto: CreateCompteDto) {
    return this.compteService.create(createCompteDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get user list',
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiOkResponse({
    type: CompteEntity,
    isArray: true,
    description: 'Get user list',
  })
  findAll() {
    return this.compteService.findAll();
  }

  @Get(':email')
  @ApiOperation({ summary: "Get a single user identified by it's email" })
  @ApiParam({
    name: 'email',
    type: 'string',
    description: 'Enter a user email',
    required: true,
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
    isArray: true,
  })
  findOneByEmail(@Param('email') email: string) {
    return this.compteService.findOneByEmail(email);
  }

  @Patch(':email')
  @HttpCode(204)
  @ApiOperation({
    summary: "Update a single user identified by it's email",
  })
  @ApiParam({
    name: 'email',
    type: 'string',
    description: 'Enter a user email',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'User value updated',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid user value',
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  @ApiOkResponse({
    type: CompteEntity,
    isArray: true,
    description: 'Update ticket',
  })
  update(
    @Param('email') email: string,
    @Body() updateUserDto: UpdateCompteDto,
  ) {
    return this.compteService.update(email, updateUserDto);
  }

  @Delete(':email')
  @ApiOperation({
    summary: "Delete a single user identified by it's email",
  })
  @ApiParam({
    name: 'email',
    type: 'string',
    description: 'Enter a user email',
    required: true,
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  @ApiOkResponse({
    type: CompteEntity,
    isArray: true,
    description: 'Delete user',
  })
  remove(@Param('email') email: string) {
    return this.compteService.remove(email);
  }
}
