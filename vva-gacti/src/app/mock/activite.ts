import { Activite, EtatActivite } from '../models/activite';
import { animation1, animation2 } from './animations';

export const codeEtatList: EtatActivite[] = [
  { code: '1', nom: 'ouverte' },
  { code: '2', nom: 'incertaine' },
  { code: '3', nom: 'annulée' },
];

const dateMock: Date = new Date();

export const activite: Activite = {
  codeAnimation: animation1.codeAnimation,
  codeEtat: codeEtatList[0],
  date: new Date(),
  dateAnnule: new Date(),
  heureDebut: new Date(),
  heureFin: new Date(),
  heureRendezVous: new Date(),
  nomResponsable: 'Abou Jamra',
  prenomResponsable: 'Mario',
  prix: 12,
};

export const activites: Activite[] = [
  {
    codeAnimation: animation2.codeAnimation,
    codeEtat: codeEtatList[0],
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
    codeAnimation: animation1.codeAnimation,
    codeEtat: codeEtatList[0],
    date: new Date(),
    dateAnnule: new Date(),
    heureDebut: new Date(),
    heureFin: new Date(),
    heureRendezVous: new Date(),
    nomResponsable: 'Abou Jamra',
    prenomResponsable: 'Mario',
    prix: 12,
  },
];
