import { Animation } from './animation';

export interface Activite {
  codeAnimation: string;
  date: string;
  codeEtat: EtatActivite | null;
  heureRendezVous: string;
  heureDebut: string;
  heureFin: string;
  prix: number | null;
  nomResponsable: string;
  prenomResponsable: string;
  dateAnnule?: string | null;
}

export interface EtatActivite {
  code: string;
  nom: string;
}
