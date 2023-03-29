import { Activite } from 'src/app/models/activite';

export interface ActiviteState {
  activiteList: Activite[];
  selectedActivite: Activite | null;
  errors: string | null;
  loading: boolean;
}
