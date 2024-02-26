import { createReducer, on } from '@ngrx/store';
import {loginFailure, loginSuccess, requestLogin} from "./authActions";
// import {_TaskReducer} from "../task/Task-Reducer";
import {AuthState, Token} from "./authState";
// import { login, loginSuccess, loginFailure } from './login.actions';

export interface State {
  token: Token | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: State = {
  token: null,
  error: null,
  isLoading: false
};

export const _userReducer = createReducer(initialState,
  on(requestLogin, state => {
   // console.log("state : ",state);
    return {
      ...state,
      isLoading: true
    }

  }),
    // { ...state, isLoading: true })),
  on(loginSuccess, (state, { authState }) => {
    console.log("-------------- : ",authState);
    return  { ...
      state, authState, isLoading
    :
      false
    }
  }),
  on(loginFailure, (state, { error }) => ({ ...state, error,isLoading: false}))
);
export function userReducer(state:any, action: any) {
  return _userReducer(state, action);

}
