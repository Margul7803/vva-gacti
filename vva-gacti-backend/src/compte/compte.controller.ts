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
import { Profils } from 'src/role/roles.decorator';
import { Profil } from '@prisma/client';
import { RolesGuard } from 'src/role/roles.guard';

//@ApiBearerAuth()
//@UseGuards(JwtAuthGuard, RolesGuard)
//@ApiSecurity('access-key')
//@UseInterceptors(ClassSerializerInterceptor)
@Profils(Profil.ADMIN)
@ApiTags('compte')
@Controller('compte')
export class CompteController {
  constructor(private readonly compteService: CompteService) {}

  @Post()
  @ApiCreatedResponse({
    type: CompteEntity,
    description: 'Create Compte',
  })
  @ApiOperation({
    summary: 'Create Compte',
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized compte action',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid compte value',
  })
  create(@Body() createCompteDto: CreateCompteDto) {
    return this.compteService.create(createCompteDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get compte list',
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized compte action',
  })
  @ApiOkResponse({
    type: CompteEntity,
    isArray: true,
    description: 'Get compte list',
  })
  findAll() {
    return this.compteService.findAll();
  }

  @Get(':username')
  @ApiOperation({ summary: "Get a single compte identified by it's username" })
  @ApiParam({
    name: 'email',
    type: 'string',
    description: 'Enter a compte username',
    required: true,
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized compte action',
  })
  @ApiResponse({
    status: 404,
    description: 'Compte not found',
    isArray: true,
  })
  findOneByEmail(@Param('username') email: string) {
    return this.compteService.findOneByEmail(email);
  }

  @Patch(':username')
  @HttpCode(204)
  @ApiOperation({
    summary: "Update a single compte identified by it's email",
  })
  @ApiParam({
    name: 'email',
    type: 'string',
    description: 'Enter a compte email',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Compte value updated',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid compte value',
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized compte action',
  })
  @ApiResponse({
    status: 404,
    description: 'Compte not found',
  })
  @ApiOkResponse({
    type: CompteEntity,
    isArray: true,
    description: 'Update ticket',
  })
  update(
    @Param('username') username: string,
    @Body() updateUserDto: UpdateCompteDto,
  ) {
    return this.compteService.update(username, updateUserDto);
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
