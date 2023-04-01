import { createAction, props } from '@ngrx/store';
import { Activite } from 'src/app/models/activite';
import { Animation } from '../../models/animation';
import { Inscription } from 'src/app/models/inscription';

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

export const updateAnimationActiviteAction = createAction(
  '[ANIMATION STATE] Update Animation Activite',
  props<{ activite: Activite }>()
);

export const updateAnimationActiviteSuccess = createAction(
  '[ANIMATION STATE] Update Animation Activite success',
  props<{ activite: Activite }>()
);

export const updateAnimationActiviteError = createAction(
  '[ANIMATION STATE] Update Animation  Activite error',
  props<{ error: Error }>()
);

export const createAnimationActivteAction = createAction(
  '[ANIMATION STATE] Update Animation Activités',
  props<{ activite: Activite }>()
);

export const createAnimationActivteSuccess = createAction(
  '[ANIMATION STATE] Update Animation Activités Success',
  props<{ activite: Activite }>()
);

export const createAnimationActivteError = createAction(
  '[ANIMATION STATE] Update Animation Activités Error',
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

export const updateAnimationInscriptionAction = createAction(
  '[ANIMATION STATE] Update Animation inscription',
  props<{ inscription: Inscription }>()
);

export const updateAnimationInscriptionActionSuccess = createAction(
  '[ANIMATION STATE] Update Animation inscription success',
  props<{ inscription: Inscription }>()
);

export const updateAnimationInscriptionActionError = createAction(
  '[ANIMATION STATE] Update Animation inscription error',
  props<{ error: Error }>()
);
