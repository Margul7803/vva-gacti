import { Injectable } from '@nestjs/common';
import { CreateActiviteDto } from './dto/create-activite.dto';
import { UpdateActiviteDto } from './dto/update-activite.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActiviteService {
  constructor(private prisma: PrismaService) {}

  create(createActiviteDto: CreateActiviteDto) {
    return this.prisma.activite.create({
      data: {
        codeAnimation: createActiviteDto.codeAnimationid,
        date: createActiviteDto.date,
        heureRendezVous: createActiviteDto.heureRendezVous,
        heureDebut: createActiviteDto.heureDebut,
        heureFin: createActiviteDto.heureFin,
        nomResponsable: createActiviteDto.nomResponsable,
        prenomResponsable: createActiviteDto.prenomResponsable,
        prix: createActiviteDto.prix,
        codeEtat: createActiviteDto.codeEtatid,
        dateAnnule: createActiviteDto.dateAnnule,
      },
      include: { Etat: true, Animation: true },
    });
  }

  findAll() {
    return this.prisma.activite.findMany();
  }

  findOne(codeAnimation: string, dateActivite: string) {
    return this.prisma.activite.findUnique({
      where: {
        codeAnimation_date: {
          codeAnimation: codeAnimation,
          date: dateActivite,
        },
      },
    });
  }

  update(
    codeAnimation: string,
    dateActivite: string,
    updateActiviteDto: UpdateActiviteDto,
  ) {
    return this.prisma.activite.update({
      where: {
        codeAnimation_date: {
          codeAnimation: codeAnimation,
          date: dateActivite,
        },
      },
      data: {
        codeAnimation: updateActiviteDto.codeAnimationid,
        date: updateActiviteDto.date,
        heureRendezVous: updateActiviteDto.heureRendezVous,
        heureDebut: updateActiviteDto.heureDebut,
        heureFin: updateActiviteDto.heureFin,
        nomResponsable: updateActiviteDto.nomResponsable,
        prenomResponsable: updateActiviteDto.prenomResponsable,
        prix: updateActiviteDto.prix,
        codeEtat: updateActiviteDto.codeEtatid,
        dateAnnule: updateActiviteDto.dateAnnule,
      },
      include: { Etat: true, Animation: true },
    });
  }

  remove(codeAnimation: string, dateActivite: string) {
    return this.prisma.activite.delete({
      where: {
        codeAnimation_date: {
          codeAnimation: codeAnimation,
          date: dateActivite,
        },
      },
    });
  }
}
