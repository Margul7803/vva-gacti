import { Activite } from './activite';
import { Compte } from './compte';

export interface Inscription {
  noInscrip: string;
  dateInscrip?: Date;
  dateAnnule?: Date | null;
  date?: Date | null;
  codeAnimation?: string;
  username?: string;
}
