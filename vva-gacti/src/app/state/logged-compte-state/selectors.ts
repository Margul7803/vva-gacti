import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoggedCompteState } from './state';

export const selectLoggedCompteState = createFeatureSelector<LoggedCompteState>(
  'logged-compte-state'
);

export const selectCompteToken = createSelector(
  selectLoggedCompteState,
  state => state.token ?? null
);

export const selectLoggedCompteProfil = createSelector(
  selectLoggedCompteState,
  state => state.compte?.type ?? null
);

export const selectLoggedCompte = createSelector(
  selectLoggedCompteState,
  state => state.compte ?? null
);

export const selectCompteLoginError = createSelector(
  selectLoggedCompteState,
  state => state?.errors ?? null
);
