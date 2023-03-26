import { createAction, props } from '@ngrx/store';
import { Animation } from '../models/animation';

export const loadAnimationList = createAction('[ANIMATION STATE] load');

export const loadAnimationListSuccess = createAction(
  '[ANIMATION STATE] load success',
  props<{ animations: Animation[] }>()
);

export const loadAnimationListError = createAction(
  '[ANIMATION STATE] load error',
  props<{ error: Error }>()
);

export const selectAnimationAction = createAction(
  '[ANIMATION STATE] select Animation',
  props<{ animation: Animation | null }>()
);

export const updateAnimationAction = createAction(
  '[ANIMATION STATE] Update Animation',
  props<{ animation: Animation }>()
);

export const updateAnimationActionSuccess = createAction(
  '[ANIMATION STATE] Update Animation success',
  props<{ animation: Animation }>()
);

export const updateAnimationActionError = createAction(
  '[ANIMATION STATE] Update Animation error',
  props<{ error: Error }>()
);

export const deleteAnimationAction = createAction(
  '[ANIMATION STATE] Delete Animation',
  props<{ animation: Animation }>()
);

export const deleteAnimationActionSuccess = createAction(
  '[ANIMATION STATE] Delete Animation success',
  props<{ animation: Animation }>()
);

export const deleteAnimationActionError = createAction(
  '[ANIMATION STATE] Delete Animation error',
  props<{ error: Error }>()
);

export const createAnimationAction = createAction(
  '[ANIMATION STATE] Create Animation',
  props<{ animation: Animation }>()
);

export const createAnimationActionSuccess = createAction(
  '[ANIMATION STATE] Create Animation success',
  props<{ animation: Animation }>()
);

export const createAnimationActionError = createAction(
  '[ANIMATION STATE] Create Animation error',
  props<{ error: Error }>()
);
