export interface Animation{
  codeAnimation: string;
  codeType: TypeAnim | null;
  nom: string;
  nbPlaceDispo: number | null;
  description: string;
  commentaire: string;
  limiteAge: number | null;
  difficulte: string;
  dateCreation: Date;
  dateValidite: Date | null;
  duree: number | null;
  tarif: number | null;
}

export interface TypeAnim{
  code: string;
  nom: string;
}

