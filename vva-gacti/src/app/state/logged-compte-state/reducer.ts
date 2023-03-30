import { createReducer, on } from '@ngrx/store';
import { loginUserError, loginUserSuccess, logoutUserSuccess } from './action';
import { LoggedUserState } from './state';

export const loggedUserState: Readonly<LoggedUserState> = {
  user: null,
  token: undefined,
  errors: null,
  loading: false,
};

export const loggedUserReducer = createReducer(
  loggedUserState,
  on(loginUserSuccess, (state, props): LoggedUserState => {
    return {
      ...state,
      user: props.user.data.user,
      token: props.user.data.token.authorization,
    };
  }),

  on(logoutUserSuccess, (state): LoggedUserState => {
    return {
      ...state,
      user: null,
      token: null,
      errors: null,
    };
  }),

  on(loginUserError, (state, props): LoggedUserState => {
    return {
      ...state,
      errors: props.error.message,
    };
  })
);
