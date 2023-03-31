import { Activite } from './activite';
import { Compte } from './compte';

export interface Inscription {
  noInscrip: string;
  Compte: Compte;
  Activite: Activite;
  dateInscrip: Date;
  dateAnnule: Date;
}
