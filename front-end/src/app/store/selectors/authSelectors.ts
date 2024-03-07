import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from "../../interfaces/authStats";

export const selectLogin =  createFeatureSelector<AuthState>('user');
export const selectToken = createSelector(
    selectLogin,
    (state) => state
);

// export const selectError =  createFeatureSelector<AuthState>('user');
// export const selectLoginError = createSelector(
//     selectLogin,
//     (state) => state
// );