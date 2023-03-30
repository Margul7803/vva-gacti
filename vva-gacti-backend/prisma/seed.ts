import { PrismaClient, Animation } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const codeType1 = await prisma.typeAnim.upsert({
    where: { code: '1' },
    update: {},
    create: {
      code: '1',
      nom: 'balade en forêt',
    },
  });

  const codeType2 = await prisma.typeAnim.upsert({
    where: { code: '2' },
    update: {},
    create: {
      code: '2',
      nom: 'balade en montagne',
    },
  });

  const codeType3 = await prisma.typeAnim.upsert({
    where: { code: '3' },
    update: {},
    create: {
      code: '3',
      nom: 'balande en rivière',
    },
  });

  const codeEtat1 = await prisma.etatActivite.upsert({
    where: { code: '1' },
    update: {},
    create: {
      code: '1',
      nom: 'ouverte',
    },
  });

  const codeEtat2 = await prisma.etatActivite.upsert({
    where: { code: '2' },
    update: {},
    create: {
      code: '2',
      nom: 'incertaine',
    },
  });

  const codeEtat3 = await prisma.etatActivite.upsert({
    where: { code: '3' },
    update: {},
    create: {
      code: '3',
      nom: 'annulée',
    },
  });

  const animation1 = await prisma.animation.upsert({
    where: { codeAnimation: 'ANIM1' },
    update: {},
    create: {
      codeAnimation: 'ANIM1',
      codeType: '1',
      commentaire: 'très bonne anim',
      dateCreation: new Date(),
      dateValidite: new Date(),
      description: 'desc',
      difficulte: 'qsdazd',
      duree: 2,
      limiteAge: 4,
      nbPlaceDispo: 5,
      nom: 'string',
      tarif: 2,
      listActivite: {
        create: [
          {
            codeEtat: '1',
            date: new Date(),
            dateAnnule: new Date(),
            heureDebut: new Date(),
            heureFin: new Date(),
            heureRendezVous: new Date(),
            nomResponsable: 'Abou Jamra',
            prenomResponsable: 'Mario',
            prix: 12,
          },
          {
            codeEtat: '3',
            date: new Date('2023-04-15'),
            dateAnnule: new Date(),
            heureDebut: new Date(),
            heureFin: new Date(),
            heureRendezVous: new Date(),
            nomResponsable: 'Abou Jamra',
            prenomResponsable: 'Mario',
            prix: 12,
          },
        ],
      },
    },
  });

  const animation2 = await prisma.animation.upsert({
    where: { codeAnimation: 'ANIM2' },
    update: {},
    create: {
      codeAnimation: 'ANIM2',
      codeType: '1',
      commentaire: 'très bonne anim',
      dateCreation: new Date(),
      dateValidite: new Date(),
      description: 'desc',
      difficulte: 'qsdazd',
      duree: 2,
      limiteAge: 4,
      nbPlaceDispo: 5,
      nom: 'string',
      tarif: 2,
      listActivite: {
        create: [
          {
            codeEtat: '2',
            date: new Date('2023-04-15'),
            dateAnnule: new Date(),
            heureDebut: new Date(),
            heureFin: new Date(),
            heureRendezVous: new Date(),
            nomResponsable: 'Abou Jamra',
            prenomResponsable: 'Mario',
            prix: 12,
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
