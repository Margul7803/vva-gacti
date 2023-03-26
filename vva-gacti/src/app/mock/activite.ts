import { Activite, EtatActivite } from '../models/activite';
import { animation } from './animations';

export const codeEtatList: EtatActivite[] = [
  { code: '1', nom: 'ouverte' },
  { code: '2', nom: 'incertaine' },
  { code: '3', nom: 'annulée' },
];

const dateMock: Date = new Date('December 18, 1995 14:24:00');

export const activite: Activite = {
  codeAnimation: animation,
  codeEtat: codeEtatList[0],
  date: dateMock,
  dateAnnule: dateMock,
  heureDebut: dateMock,
  heureFin: dateMock,
  heureRendezVous: dateMock,
  nomResponsable: 'Abou Jamra',
  prenomResponsable: 'Mario',
  prix: 12,
};

export const activites: Activite[] = [
  {
    codeAnimation: animation,
    codeEtat: codeEtatList[0],
    date: dateMock,
    dateAnnule: dateMock,
    heureDebut: dateMock,
    heureFin: dateMock,
    heureRendezVous: dateMock,
    nomResponsable: 'Abou Jamra',
    prenomResponsable: 'Mario',
    prix: 12,
  },
  {
    codeAnimation: animation,
    codeEtat: codeEtatList[0],
    date: dateMock,
    dateAnnule: dateMock,
    heureDebut: dateMock,
    heureFin: dateMock,
    heureRendezVous: dateMock,
    nomResponsable: 'Abou Jamra',
    prenomResponsable: 'Mario',
    prix: 12,
  },
];
