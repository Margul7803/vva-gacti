import { Injectable } from '@nestjs/common';
import { CreateInscriptionDto } from './dto/create-inscription.dto';
import { UpdateInscriptionDto } from './dto/update-inscription.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InscriptionService {
  constructor(private prisma: PrismaService) {}

  create(createInscriptionDto: CreateInscriptionDto) {
    return this.prisma.inscription.create({
      data: {
        dateAnnule: createInscriptionDto.dateAnnule,
        dateInscrip: createInscriptionDto.dateInscrip,
        noInscrip: createInscriptionDto.noInscrip,
        codeAnimation: createInscriptionDto.codeAnimation,
        date: createInscriptionDto.date,
        username: createInscriptionDto.username,
      },
    });
  }

  findAll() {
    return this.prisma.inscription.findMany();
  }

  findOne(noInscrip: string) {
    return this.prisma.inscription.findUnique({
      where: { noInscrip: noInscrip },
    });
  }

  update(noInscrip: string, updateInscriptionDto: UpdateInscriptionDto) {
    return this.prisma.inscription.update({
      where: { noInscrip: noInscrip },
      data: updateInscriptionDto,
    });
  }

  remove(noInscrip: string) {
    return this.prisma.inscription.delete({
      where: { noInscrip: noInscrip },
    });
  }
}
