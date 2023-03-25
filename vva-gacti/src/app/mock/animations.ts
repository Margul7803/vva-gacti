import { TypeAnim, Animation } from '../models/animation';

const dateMock: Date = new Date('December 17, 1995 03:24:00');

export const codeTypeList: TypeAnim[] = [
  { code: '1', nom: 'balade ne forêt' },
  { code: '2', nom: 'balade en montagne' },
  { code: '3', nom: 'balande ne rivière' },
];

export const animation: Animation = {
  codeAnimation: 'Anim1',
  codeType: codeTypeList[1],
  commentaire: 'très bonne anim',
  dateCreation: dateMock,
  dateValidite: dateMock,
  description: 'desc',
  difficulte: 'qsdazd',
  duree: 2,
  limiteAge: 4,
  nbPlaceDispo: 5,
  nom: 'Animation numéro 1',
  tarif: 2,
};

export const Animations: Animation[] = [
  {
    codeAnimation: 'Anim1',
    codeType: codeTypeList[1],
    commentaire: 'très bonne anim',
    dateCreation: dateMock,
    dateValidite: dateMock,
    description: 'desc',
    difficulte: 'qsdazd',
    duree: 2,
    limiteAge: 4,
    nbPlaceDispo: 5,
    nom: 'string',
    tarif: 2,
  },
  {
    codeAnimation: 'Anim2',
    codeType: codeTypeList[0],
    commentaire: 'très nul anim',
    dateCreation: dateMock,
    dateValidite: dateMock,
    description: 'ddsq',
    difficulte: 'qsaazeazedazd',
    duree: 2,
    limiteAge: 4,
    nbPlaceDispo: 5,
    nom: 'caca',
    tarif: 2,
  },
];
