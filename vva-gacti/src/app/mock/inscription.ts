import { Profil } from '../models/compte';
import { Inscription } from '../models/inscription';
import { codeEtatList } from './activite';
import { animation1 } from './animations';

export const inscription1: Inscription = {
  noInscrip: '',
  Activite: {
    codeAnimation: animation1.codeAnimation,
    Etat: codeEtatList[0],
    date: new Date(),
    dateAnnule: new Date(),
    heureDebut: new Date(),
    heureFin: new Date(),
    heureRendezVous: new Date(),
    nomResponsable: 'Abou Jamra',
    prenomResponsable: 'Mario',
    prix: 12,
  },
  Compte: {
    nom: 'ABOU JAMRA',
    prenom: 'Mario',
    username: 'mario.aboujamra',
    dateInscr: new Date(),
    dateDebutSej: new Date(),
    dateFinSej: new Date(),
    dateFerm: new Date(),
    dateNais: new Date(),
    mail: 'mario.aboujamra@gmail.com',
    tel: '06 64 12 84 21',
    type: Profil.ADMIN,
  },
  dateAnnule: new Date(),
  dateInscrip: new Date(),
};
