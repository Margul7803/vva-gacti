import { Compte } from "src/app/models/compte";

export interface LoggedCompteState {
  compte: Compte | null;
  token?: string | null;
  errors: string | null;
  loading: boolean;
}
