import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActiviteState } from './state';

export const selectActiviteState =
  createFeatureSelector<ActiviteState>('activite-state');

export const selectActvitieList = createSelector(
  selectActiviteState,
  state => state?.activiteList ?? []
);

export const selectActivite = createSelector(
  selectActiviteState,
  state => state?.selectedActivite ?? null
);
