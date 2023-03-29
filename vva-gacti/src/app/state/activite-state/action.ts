import { createAction, props } from '@ngrx/store';
import { Activite } from 'src/app/models/activite';

export const loadActiviteList = createAction('[ACTIVITE STATE] load');

export const loadActiviteListSuccess = createAction(
  '[ACTIVITE STATE] load success',
  props<{ activites: Activite[] }>()
);

export const loadActiviteListError = createAction(
  '[ACTIVITE STATE] load error',
  props<{ error: Error }>()
);

export const selectActiviteAction = createAction(
  '[ACTIVITE STATE] select Activite',
  props<{ activite: Activite | null }>()
);

export const updateActiviteAction = createAction(
  '[ACTIVITE STATE] Update Activite',
  props<{ activite: Activite }>()
);

export const updateActiviteActionSuccess = createAction(
  '[ACTIVITE STATE] Update Activite success',
  props<{ activite: Activite }>()
);

export const updateActiviteActionError = createAction(
  '[ACTIVITE STATE] Update Activite error',
  props<{ error: Error }>()
);

export const deleteActiviteAction = createAction(
  '[ACTIVITE STATE] Delete Activite',
  props<{ activite: Activite }>()
);

export const deleteActiviteActionSuccess = createAction(
  '[ACTIVITE STATE] Delete Activite success',
  props<{ activite: Activite }>()
);

export const deleteActiviteActionError = createAction(
  '[ACTIVITE STATE] Delete Activite error',
  props<{ error: Error }>()
);

export const createActiviteAction = createAction(
  '[ACTIVITE STATE] Create Activite',
  props<{ activite: Activite }>()
);

export const createActiviteActionSuccess = createAction(
  '[ACTIVITE STATE] Create Activite success',
  props<{ activite: Activite }>()
);

export const createActiviteActionError = createAction(
  '[ACTIVITE STATE] Create Activite error',
  props<{ error: Error }>()
);
