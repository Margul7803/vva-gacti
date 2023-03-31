import { Login, ICompteLogged } from '../../models/compte';
import { createAction, props } from '@ngrx/store';

export const loginCompte = createAction(
  '[LOGGED COMPTE STATE] login',
  props<{ loginData: Login }>()
);

export const loginCompteSuccess = createAction(
  '[LOGGED COMPTE STATE] login success',
  props<{ compte: ICompteLogged }>()
);

export const loginCompteError = createAction(
  '[LOGGED COMPTE STATE] login error',
  props<{ error: Error }>()
);

export const logoutCompte = createAction(
  '[LOGGED COMPTE STATE] logout',
  props<{ action: string | null }>()
);

export const logoutCompteSuccess = createAction(
  '[LOGGED COMPTE STATE] logout success'
);

export const logoutUserError = createAction(
  '[LOGGED COMPTE STATE] logout error'
);
