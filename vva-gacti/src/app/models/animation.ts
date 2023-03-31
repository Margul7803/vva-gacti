import { Activite } from './activite';

export interface Animation {
  codeAnimation: string;
  TypeAnim: TypeAnim | null;
  nom: string;
  nbPlaceDispo: number | null;
  description: string;
  commentaire: string;
  limiteAge: number | null;
  difficulte: string;
  dateCreation: Date | null;
  dateValidite: Date | null;
  duree: number | null;
  tarif: number | null;
  listActivite: Activite[] | null;
}

export interface TypeAnim {
  code: string;
  nom: string;
}
