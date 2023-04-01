import { Module } from '@nestjs/common';
import { InscriptionService } from './inscription.service';
import { InscriptionController } from './inscription.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [InscriptionController],
  providers: [InscriptionService],
  imports: [PrismaModule],
})
export class InscriptionModule {}
