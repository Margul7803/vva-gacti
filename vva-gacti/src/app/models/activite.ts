import { Inscription } from './inscription';

export interface Activite {
  codeAnimation: string;
  date: Date | null;
  Etat: EtatActivite | null;
  heureRendezVous: Date | null;
  heureDebut: Date | null;
  heureFin: Date | null;
  prix: number | null;
  nomResponsable: string;
  prenomResponsable: string;
  dateAnnule?: Date | null;
  Inscription?: Inscription[] | null;
}

export interface EtatActivite {
  code: string;
  nom: string;
}
