import { Activite } from 'src/app/models/activite';
import { Login, ICompteLogged } from '../../models/compte';
import { createAction, props } from '@ngrx/store';
import { Inscription } from 'src/app/models/inscription';

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

export const inscriptionCompte = createAction(
  '[LOGGED COMPTE STATE] add inscription',
  props<{ inscription: Inscription }>()
);

export const inscriptionCompteSuccess = createAction(
  '[LOGGED COMPTE STATE] add inscription success',
  props<{ inscription: Inscription }>()
);

export const inscriptionCompteError = createAction(
  '[LOGGED COMPTE STATE] add inscription error',
  props<{ error: Error }>()
);

export const deInscriptionCompte = createAction(
  '[LOGGED COMPTE STATE] remove inscription',
  props<{ inscription: Inscription }>()
);

export const deInscriptionCompteSuccess = createAction(
  '[LOGGED COMPTE STATE] remove inscription success',
  props<{ inscription: Inscription }>()
);

export const deInscriptionCompteError = createAction(
  '[LOGGED COMPTE STATE] remove inscription error',
  props<{ error: Error }>()
);
