import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompteDto } from './dto/create-compte.dto';
import { UpdateCompteDto } from './dto/update-compte.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class CompteService {
  constructor(private prisma: PrismaService) {}
  async create(createCompteDto: CreateCompteDto) {
    if (
      await this.prisma.compte.findUnique({
        where: { username: createCompteDto.username },
        select: {
          password: false,
          username: true,
          nom: true,
          prenom: true,
        },
      })
    ) {
      throw new HttpException('Email already used', 400);
    }
    const saltLenght = 12;
    const hashedPassword = await bcrypt.hash(
      createCompteDto.password,
      saltLenght,
    );
    return this.prisma.compte.create({
      data: {
        username: createCompteDto.username,
        password: hashedPassword,
        nom: createCompteDto.nom,
        prenom: createCompteDto.prenom,
        type: createCompteDto.type,
        dateDebutSej: createCompteDto.dateDebutSej,
        dateFerm: createCompteDto.dateFerm,
        dateFinSej: createCompteDto.dateFinSej,
        dateInscr: createCompteDto.dateInscr,
        dateNais: createCompteDto.dateNais,
        mail: createCompteDto.mail,
        tel: createCompteDto.tel,
      },
    });
  }

  findAll() {
    return this.prisma.compte.findMany({
      select: {
        password: false,
        username: true,
        nom: true,
        prenom: true,
        type: true,
      },
    });
  }

  async findOneByEmail(username: string) {
    const user = await this.prisma.compte.findUnique({
      where: { username: username },
      select: {
        password: false,
        username: true,
        nom: true,
        prenom: true,
      },
    });
    if (!user) {
      throw new HttpException(
        'Utilisateur inexistant',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user;
  }

  async isPasswordMatch(username: string, password: string) {
    const user = await this.prisma.compte.findFirst({
      where: { username: username },
    });
    if (!user) {
      throw new HttpException(
        'Utilisateur inexistant',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const areEqual = await bcrypt.compare(password, user.password);
    if (!areEqual) {
      throw new HttpException('Information de connexion invalid', HttpStatus.UNAUTHORIZED);
    }
    const { password: p, ...rest } = user;
    return rest;
  }

  async update(username: string, updateCompteDto: UpdateCompteDto) {
    const user = await this.prisma.compte.findUnique({
      where: { username: username },
      select: { password: false, username: true, nom: true, prenom: true },
    });
    if (!user) {
      throw new HttpException(
        'Utilisateur inexistant',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const saltLenght = 12;
    const hashedPassword = await bcrypt.hash(
      updateCompteDto.password,
      saltLenght,
    );
    return this.prisma.compte.update({
      where: { username: username },
      data: {
        username: updateCompteDto.username,
        password: hashedPassword,
        nom: updateCompteDto.nom,
        prenom: updateCompteDto.prenom,
      },
      select: { password: false, username: true, nom: true, prenom: true },
    });
  }

  async remove(username: string) {
    const user = await this.prisma.compte.findUnique({
      where: { username: username },
      select: { password: false, username: true, nom: true, prenom: true },
    });
    if (!user) {
      throw new HttpException(
        'Utilisateur inexistant',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return this.prisma.compte.delete({
      where: { username: username },
      select: { password: false, username: true, nom: true, prenom: true },
    });
  }

  async findByPayload({ username }: any): Promise<any> {
    return await this.prisma.compte.findFirst({
      where: { username: username },
      select: { password: false, username: true, type: true },
    });
  }
}
