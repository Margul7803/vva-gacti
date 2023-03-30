import { Module } from '@nestjs/common';
import { AnimationService } from './animation.service';
import { AnimationController } from './animation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AnimationController],
  providers: [AnimationService],
  imports: [PrismaModule],
})
export class AnimationModule {}
