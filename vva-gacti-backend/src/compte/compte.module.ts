import { Module } from '@nestjs/common';
import { CompteService } from './compte.service';
import { CompteController } from './compte.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CompteController],
  providers: [CompteService, PrismaService],
  imports: [PrismaModule],
  exports: [CompteService],
})
export class CompteModule {}
