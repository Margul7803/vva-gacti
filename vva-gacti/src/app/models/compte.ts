import { Inscription } from './inscription';

export interface Compte {
  username: string;
  password?: string;
  nom: string;
  prenom: string;
  dateInscr: Date;
  dateFerm: Date;
  type: Profil;
  dateDebutSej: Date | null;
  dateFinSej: Date;
  dateNais: Date;
  mail: string;
  tel: string;
  Inscription: Inscription[];
}

export interface Login {
  username: string;
  password: string;
}

export interface ICompteLogged {
  data: {
    compte: Compte;
    token: IToken;
  };
}

export interface IToken {
  authorization: string;
  expiresIn: string;
}

export enum Profil {
  ADMIN = 'Admin',
  ENCADRANT = 'Encadrant',
  VACANCIER = 'Vacancier',
}
