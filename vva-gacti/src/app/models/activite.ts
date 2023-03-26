import { Animation } from './animation';

export interface Activite {
  codeAnimation: Animation | null;
  date: Date | null;
  codeEtat: EtatActivite | null;
  heureRendezVous: Date | null;
  heureDebut: Date | null;
  heureFin: Date | null;
  prix: number | null;
  nomResponsable: string;
  prenomResponsable: string;
  dateAnnule: Date | null;
}

export interface EtatActivite {
  code: string;
  nom: string;
}
