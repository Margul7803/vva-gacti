import { Profil, Compte } from '../models/compte';

const dateMock: Date = new Date('December 17, 1995 03:24:00');

export const user: Compte = {
  nom: 'ABOU JAMRA',
  prenom: 'Mario',
  username: 'mario.aboujamra',
  dateInscr: dateMock,
  dateDebutSej: dateMock,
  dateFinSej: dateMock,
  dateFerm: dateMock,
  dateNais: dateMock,
  mail: 'mario.aboujamra@gmail.com',
  tel: '06 64 12 84 21',
  type: Profil.ADMIN,
  Inscription: [],
};
