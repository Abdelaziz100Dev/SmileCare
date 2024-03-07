import { createAction, props } from '@ngrx/store';
import {AuthState, Token} from "../../interfaces/authStats";

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
