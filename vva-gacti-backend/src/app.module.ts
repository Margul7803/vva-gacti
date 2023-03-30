import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AnimationModule } from './animation/animation.module';
import { ActiviteModule } from './activite/activite.module';

@Module({
  imports: [PrismaModule, AnimationModule, ActiviteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
