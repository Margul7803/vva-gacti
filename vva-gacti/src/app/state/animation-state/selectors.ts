import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnimationState } from './state';

export const selectAnimationState =
  createFeatureSelector<AnimationState>('animation-state');

export const selectAnimationList = createSelector(
  selectAnimationState,
  state => state?.animationList ?? []
);

export const selectAnimation = createSelector(
  selectAnimationState,
  state => state?.selectedAnimation ?? null
);
