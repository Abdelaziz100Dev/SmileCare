import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TaskModel} from "../../model/taskModel";
import {AuthState} from "./authState";

// const selectLogin = (state: any) => state.login;
export const selectLogin =  createFeatureSelector<AuthState>('user');
export const selectToken = createSelector(
  selectLogin,
  (state) => state
);

// export const selectError = createSelector(
//   selectLogin,
//   (state) => state.error
// );
//
// export const selectIsLoading = createSelector(
//   selectLogin,
//   (state) => state.isLoading
// );
