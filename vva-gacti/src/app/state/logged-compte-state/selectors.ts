import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoggedCompteState } from './state';

export const selectLoggedUserState = createFeatureSelector<LoggedCompteState>(
  'logged-compte-state'
);

export const selectUserToken = createSelector(
  selectLoggedUserState,
  state => state.token ?? null
);

export const selectLoggedUserRole = createSelector(
  selectLoggedUserState,
  state => state.compte?.type ?? null
);

export const selectLoggedUser = createSelector(
  selectLoggedUserState,
  state => state.compte ?? null
);

export const selectUserLoginError = createSelector(
  selectLoggedUserState,
  state => state?.errors ?? null
);
