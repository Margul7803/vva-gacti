import { TypeAnim, Animation } from '../models/animation';
import { codeEtatList } from './activite';

const dateMock: Date = new Date();

export const codeTypeList: TypeAnim[] = [
  { code: '1', nom: 'balade ne forêt' },
  { code: '2', nom: 'balade en montagne' },
  { code: '3', nom: 'balande ne rivière' },
];

export const animation1: Animation = {
  codeAnimation: 'Anim1',
  codeType: codeTypeList[1],
  commentaire: 'très bonne anim',
  dateCreation: '2022-12-11',
  dateValidite: '2022-12-11',
  description: 'desc',
  difficulte: 'qsdazd',
  duree: 2,
  limiteAge: 4,
  nbPlaceDispo: 5,
  nom: 'caca',
  tarif: 2,
  listActivite: [],
};

export const animation2: Animation = {
  codeAnimation: 'Anim2',
  codeType: codeTypeList[1],
  commentaire: 'très bonne anim',
  dateCreation: '2022-12-11',
  dateValidite: '2022-12-11',
  description: 'desc',
  difficulte: 'qsdazd',
  duree: 2,
  limiteAge: 4,
  nbPlaceDispo: 5,
  nom: 'string',
  tarif: 2,
  listActivite: [],
};

export const animations: Animation[] = [
  {
    codeAnimation: 'Anim1',
    codeType: codeTypeList[1],
    commentaire: 'très bonne anim',
    dateCreation: '2022-12-11',
    dateValidite: '2022-12-11',
    description: 'desc',
    difficulte: 'qsdazd',
    duree: 2,
    limiteAge: 4,
    nbPlaceDispo: 5,
    nom: 'string',
    tarif: 2,
    listActivite: [],
  },
  {
    codeAnimation: 'Anim2',
    codeType: codeTypeList[0],
    commentaire: 'très nul anim',
    dateCreation: '2022-12-11',
    dateValidite: '2022-12-11',
    description: 'ddsq',
    difficulte: 'qsaazeazedazd',
    duree: 2,
    limiteAge: 4,
    nbPlaceDispo: 5,
    nom: 'caca',
    tarif: 2,
    listActivite: [
      {
        codeAnimation: 'Anim2',
        codeEtat: { code: '1', nom: 'ouverte' },
        date: '2022-12-11',
        dateAnnule: '2023/01/11',
        heureDebut: '11:12',
        heureFin: '11:13',
        heureRendezVous: '11:00',
        nomResponsable: 'Abou Jamra',
        prenomResponsable: 'Mario',
        prix: 12,
      },
      {
        codeAnimation: 'Anim2',
        codeEtat: { code: '1', nom: 'ouverte' },
        date: '2022-12-11',
        dateAnnule: '2023/01/11',
        heureDebut: '11:12',
        heureFin: '11:13',
        heureRendezVous: '11:00',
        nomResponsable: 'Abou Jamra',
        prenomResponsable: 'Mario',
        prix: 12,
      },
    ],
  },
];
