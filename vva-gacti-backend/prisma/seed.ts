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
      dateCreation: '2023-01-22T00:00:00.000Z',
      dateValidite: '2023-07-22T00:00:00.000Z',
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
            date: '2023-01-11T00:00:00.000Z',
            dateAnnule: null,
            heureDebut: '2023-01-11T12:00:00.000Z',
            heureFin: '2023-01-11T13:00:00.000Z',
            heureRendezVous: '2023-01-11T11:45:00.000Z',
            nomResponsable: 'Abou Jamra',
            prenomResponsable: 'Mario',
            prix: 12,
          },
          {
            codeEtat: '3',
            date: '2023-05-22T00:00:00.000Z',
            dateAnnule: null,
            heureDebut: '2023-05-22T15:00:00.000Z',
            heureFin: '2023-05-22T16:00:00.000Z',
            heureRendezVous: '2023-05-22T14:45:00.000Z',
            nomResponsable: 'Custodio',
            prenomResponsable: 'Kevin',
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
      dateCreation: '2022-04-29T00:00:00.000Z',
      dateValidite: '2023-09-29T00:00:00.000Z',
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
            date: '2023-04-29T00:00:00.000Z',
            dateAnnule: null,
            heureDebut: '2023-04-29T12:45:00.000Z',
            heureFin: '2023-04-29T13:50:00.000Z',
            heureRendezVous: '2023-04-29T12:30:00.000Z',
            nomResponsable: 'Marix',
            prenomResponsable: 'Enzo',
            prix: 12,
          },
        ],
      },
    },
  });

  const compt1 = await prisma.compte.upsert({
    where: { username: 'mario.aboujamra' },
    update: {},
    create: {
      dateDebutSej: '2022-07-05T00:00:00.000Z',
      dateFerm: '2022-07-05T00:00:00.000Z',
      dateFinSej: '2022-07-05T00:00:00.000Z',
      dateInscr: '2022-07-05T00:00:00.000Z',
      dateNais: '2022-07-05T00:00:00.000Z',
      mail: 'mario.aboujamra@gmail.com',
      nom: 'Abou Jamra',
      password: '$2a$12$tGFqOejeqfhbBo4dStfaueLfmpEYxuixxq6yh5GZXmmNQIv2bIY1i',
      prenom: 'Mario',
      tel: '0664128413',
      type: 'ADMIN',
      username: 'mario.aboujamra',
      Inscription: {
        create: [
          {
            noInscrip: '1',
            dateAnnule: '2022-07-05T00:00:00.000Z',
            dateInscrip: '2022-07-05T00:00:00.000Z',
            codeAnimation: 'ANIM1',
            date: '2023-01-11T00:00:00.000Z',
          },
        ],
      },
    },
  });

  const compt2 = await prisma.compte.upsert({
    where: { username: 'kevin.custodio' },
    update: {},
    create: {
      dateDebutSej: '2022-07-05T00:00:00.000Z',
      dateFerm: '2022-07-05T00:00:00.000Z',
      dateFinSej: '2022-07-05T00:00:00.000Z',
      dateInscr: '2022-07-05T00:00:00.000Z',
      dateNais: '2022-07-05T00:00:00.000Z',
      mail: 'kevin.custodio@gmail.com',
      nom: 'Custodio',
      password: '$2a$12$jT9UlT.KQrRe7ZnTtOFxp.q/7CyHFLQ7E2VDx/wv6jvjVSE/pNaim',
      prenom: 'Kevin',
      tel: '0664128490',
      type: 'VACANCIER',
      username: 'kevin.custodio',
    },
  });

  const compt3 = await prisma.compte.upsert({
    where: { username: 'enzo.marix' },
    update: {},
    create: {
      dateDebutSej: '2022-07-05T00:00:00.000Z',
      dateFerm: '2022-07-05T00:00:00.000Z',
      dateFinSej: '2022-07-05T00:00:00.000Z',
      dateInscr: '2022-07-05T00:00:00.000Z',
      dateNais: '2022-07-05T00:00:00.000Z',
      mail: 'enzo.marix@gmail.com',
      nom: 'Marix',
      password: '$2a$12$TkXSHTcdPqogp3o3fOYDBuu6gIuF0.6bNDy6JVYpwMj0cqAxLHCp2',
      prenom: 'Enzo',
      tel: '0664126787',
      type: 'ENCADRANT',
      username: 'enzo.marix',
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
