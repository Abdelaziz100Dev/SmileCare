import { createAction, props } from '@ngrx/store';
import {AuthState, Token} from "./authState";

const STORE_TOKEN = '[Token] store token';

const REQUEST_LOGIN = '[Login] Request Login';
const LOGIN_SUCCESS = '[Login] Login Success';
const LOGIN_FAILURE = '[Login] Login Failure';

export const storeToken = createAction(
  STORE_TOKEN,
  props<{token:Token}>()
);

export const requestLogin = createAction(
  REQUEST_LOGIN,
  props<{ username: string, password: string }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ authState: AuthState }>()
);

export const loginFailure = createAction(
  LOGIN_FAILURE,
  props<{ error: string }>()
);

const REQUEST_REGISTER = '[register] Request register';
const REGISTER_SUCCESS = '[register] register Success';
const REGISTER_FAILURE = '[register] register Failure';

export const requestRegister = createAction(
  REQUEST_REGISTER,
  props<{ username: string, password: string }>()
);

export const registerSuccess = createAction(
  REGISTER_SUCCESS,
  props<{ authState: AuthState }>()
);

export const registerFailure = createAction(
  REGISTER_FAILURE,
  props<{ error: string }>()
);
