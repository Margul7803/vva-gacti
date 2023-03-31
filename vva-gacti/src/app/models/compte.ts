export interface Compte {
  username: string;
  password?: string;
  nom: string;
  prenom: string;
  dateInscr: Date;
  dateFerm: Date;
  type: Profil;
  dateDebutSej: Date;
  dateFinSej: Date;
  dateNais: Date;
  mail: string;
  tel: string;
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
