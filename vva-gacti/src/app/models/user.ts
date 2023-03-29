export interface User {
  user: string;
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

export enum Profile {
  ADMIN = 'Admin',
  ENCADRANT = 'Encadrant',
  VACANCIER = 'Vacancier',
}
