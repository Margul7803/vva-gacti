import { Injectable } from '@nestjs/common';
import { CreateAnimationDto } from './dto/create-animation.dto';
import { UpdateAnimationDto } from './dto/update-animation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnimationService {
  constructor(private prisma: PrismaService) {}

  create(createAnimationDto: CreateAnimationDto) {
    return this.prisma.animation.create({
      data: {
        codeAnimation: createAnimationDto.codeAnimation,
        nom: createAnimationDto.nom,
        codeType: createAnimationDto.codeTypeid,
        commentaire: createAnimationDto.commentaire,
        description: createAnimationDto.description,
        dateValidite: createAnimationDto.dateValidite,
        dateCreation: createAnimationDto.dateCreation,
        difficulte: createAnimationDto.difficulte,
        duree: createAnimationDto.duree,
        limiteAge: createAnimationDto.limiteAge,
        nbPlaceDispo: createAnimationDto.nbPlaceDispo,
        tarif: createAnimationDto.tarif,
      },
      select: {
        codeAnimation: true,
        nom: true,
        codeType: false,
        commentaire: true,
        description: true,
        dateValidite: true,
        dateCreation: true,
        difficulte: true,
        duree: true,
        limiteAge: true,
        nbPlaceDispo: true,
        tarif: true,
        listActivite: {
          select: {
            codeAnimation: true,
            codeEtat: false,
            date: true,
            dateAnnule: true,
            heureDebut: true,
            heureFin: true,
            heureRendezVous: true,
            nomResponsable: true,
            prenomResponsable: true,
            prix: true,
            Etat: true,
            Animation: true,
          },
        },
        TypeAnim: true,
      },
    });
  }

  findAll() {
    return this.prisma.animation.findMany({
      select: {
        codeAnimation: true,
        nom: true,
        codeType: false,
        commentaire: true,
        description: true,
        dateValidite: true,
        dateCreation: true,
        difficulte: true,
        duree: true,
        limiteAge: true,
        nbPlaceDispo: true,
        tarif: true,
        listActivite: {
          select: {
            codeAnimation: true,
            codeEtat: false,
            date: true,
            dateAnnule: true,
            heureDebut: true,
            heureFin: true,
            heureRendezVous: true,
            nomResponsable: true,
            prenomResponsable: true,
            prix: true,
            Etat: true,
            Animation: true,
          },
        },
        TypeAnim: true,
      },
    });
  }

  findOne(codeAnimation: string) {
    return this.prisma.animation.findUnique({
      where: { codeAnimation: codeAnimation },
      include: {
        listActivite: {
          select: {
            codeAnimation: true,
            codeEtat: false,
            date: true,
            dateAnnule: true,
            heureDebut: true,
            heureFin: true,
            heureRendezVous: true,
            nomResponsable: true,
            prenomResponsable: true,
            prix: true,
            Etat: true,
            Animation: true,
          },
        },
        TypeAnim: true,
      },
    });
  }

  update(codeAnimation: string, updateAnimationDto: UpdateAnimationDto) {
    return this.prisma.animation.update({
      where: { codeAnimation: codeAnimation },
      data: {
        codeAnimation: updateAnimationDto.codeAnimation,
        nom: updateAnimationDto.nom,
        codeType: updateAnimationDto.codeTypeid,
        commentaire: updateAnimationDto.commentaire,
        description: updateAnimationDto.description,
        dateValidite: updateAnimationDto.dateValidite,
        dateCreation: updateAnimationDto.dateCreation,
        difficulte: updateAnimationDto.difficulte,
        duree: updateAnimationDto.duree,
        limiteAge: updateAnimationDto.limiteAge,
        nbPlaceDispo: updateAnimationDto.nbPlaceDispo,
        tarif: updateAnimationDto.tarif,
      },
      select: {
        codeAnimation: true,
        nom: true,
        codeType: false,
        commentaire: true,
        description: true,
        dateValidite: true,
        dateCreation: true,
        difficulte: true,
        duree: true,
        limiteAge: true,
        nbPlaceDispo: true,
        tarif: true,
        listActivite: {
          select: {
            codeAnimation: true,
            codeEtat: false,
            date: true,
            dateAnnule: true,
            heureDebut: true,
            heureFin: true,
            heureRendezVous: true,
            nomResponsable: true,
            prenomResponsable: true,
            prix: true,
            Etat: true,
            Animation: true,
          },
        },
        TypeAnim: true,
      },
    });
  }

  remove(codeAnimation: string) {
    return this.prisma.animation.delete({
      where: { codeAnimation: codeAnimation },
    });
  }
}
