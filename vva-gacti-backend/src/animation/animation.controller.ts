import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AnimationService } from './animation.service';
import { CreateAnimationDto } from './dto/create-animation.dto';
import { UpdateAnimationDto } from './dto/update-animation.dto';
import { AnimationEntity } from './entities/animation.entity';

@ApiTags('animation')
@Controller('animation')
export class AnimationController {
  constructor(private readonly animationService: AnimationService) {}

  @Post()
  @ApiCreatedResponse({
    type: AnimationEntity,
    description: 'Create animation',
  })
  @ApiOperation({
    summary: 'Create animation',
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid animation value',
  })
  create(@Body() createAnimationDto: CreateAnimationDto) {
    return this.animationService.create(createAnimationDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get animation list',
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiOkResponse({
    type: AnimationEntity,
    isArray: true,
    description: 'Get animation list',
  })
  findAll() {
    return this.animationService.findAll();
  }

  @Get(':codeAnimation')
  @ApiOperation({
    summary: "Get a single animation identified by it's codeAnimation",
  })
  @ApiParam({
    name: 'codeAnimation',
    type: 'string',
    description: 'Enter an animation id',
    required: true,
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiResponse({
    status: 404,
    description: 'Animation not found',
    isArray: true,
  })
  findOne(@Param('codeAnimation') codeAnimation: string) {
    return this.animationService.findOne(codeAnimation);
  }

  @Patch(':codeAnimation')
  @ApiOperation({
    summary: "Update a single animation identified by it's codeAnimation",
  })
  @ApiParam({
    name: 'codeAnimation',
    type: 'string',
    description: 'Enter a animation codeAnimation',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Animation value updated',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid animation value',
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiResponse({
    status: 404,
    description: 'Animation not found',
  })
  @ApiOkResponse({
    type: AnimationEntity,
    isArray: true,
    description: 'Update animation',
  })
  update(
    @Param('codeAnimation') codeAnimation: string,
    @Body() updateAnimationDto: UpdateAnimationDto,
  ) {
    const animation = this.animationService.findOne(codeAnimation);
    if (!animation) {
      throw new NotFoundException(
        `Animation with ${codeAnimation} codeAnimation does not exist`,
      );
    }
    return this.animationService.update(codeAnimation, updateAnimationDto);
  }

  @Delete(':codeAnimation')
  @ApiOperation({
    summary: "Delete a single animation identified by it's codeAnimation",
  })
  @ApiParam({
    name: 'codeAnimation',
    type: 'string',
    description: 'Enter a animation codeAnimation',
    required: true,
  })
  @ApiResponse({
    status: 403,
    description: 'Unauthorized user action',
  })
  @ApiResponse({
    status: 404,
    description: 'Animation not found',
  })
  @ApiOkResponse({
    type: AnimationEntity,
    isArray: true,
    description: 'Delete animation',
  })
  remove(@Param('codeAnimation') codeAnimation: string) {
    const animation = this.animationService.findOne(codeAnimation);
    if (!animation) {
      throw new NotFoundException(
        `Animation with ${codeAnimation} codeAnimation does not exist`,
      );
    }
    return this.animationService.remove(codeAnimation);
  }
}
