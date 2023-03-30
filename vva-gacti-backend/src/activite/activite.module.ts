import { Module } from '@nestjs/common';
import { ActiviteService } from './activite.service';
import { ActiviteController } from './activite.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ActiviteController],
  providers: [ActiviteService],
  imports: [PrismaModule],
})
export class ActiviteModule {}
