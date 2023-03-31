import { createReducer, on } from '@ngrx/store';
import {
  loginCompteError,
  loginCompteSuccess,
  logoutCompteSuccess,
} from './action';
import { LoggedCompteState } from './state';

export const loggedCompteState: Readonly<LoggedCompteState> = {
  compte: null,
  token: undefined,
  errors: null,
  loading: false,
};

export const loggedCompteReducer = createReducer(
  loggedCompteState,
  on(loginCompteSuccess, (state, props): LoggedCompteState => {
    return {
      ...state,
      compte: props.compte.data.compte,
      token: props.compte.data.token.authorization,
    };
  }),

  on(logoutCompteSuccess, (state): LoggedCompteState => {
    return {
      ...state,
      compte: null,
      token: null,
      errors: null,
    };
  }),

  on(loginCompteError, (state, props): LoggedCompteState => {
    return {
      ...state,
      errors: props.error.message,
    };
  })
);
