export interface Compte {
  username: string;
  password?: string;
  nom: string;
  prenom: string;
  dateInscr: Date;
  dateFerm: Date;
  type: Profile;
  dateDebutSej: Date;
  dateFinSej: Date;
  dateNais: Date;
  mail: string;
  tel: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface ICompteLogged {
  data: {
    user: Compte;
    token: IToken;
  };
}

export interface IToken {
  authorization: string;
  expiresIn: string;
}

export enum Profile {
  ADMIN = 'Admin',
  ENCADRANT = 'Encadrant',
  VACANCIER = 'Vacancier',
}
