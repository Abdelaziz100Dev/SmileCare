import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, catchError, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {loginFailure, loginSuccess, requestLogin, storeToken} from "./authActions";
import {AuthService} from "./AuthService";
import {CookieService} from "ngx-cookie-service";
import {AuthState} from "./authState";
import {Store} from "@ngrx/store";
import {Action} from "rxjs/internal/scheduler/Action";

@Injectable()
export class LoginEffects {

  constructor(private actions$: Actions, private authService: AuthService, private cookieService: CookieService,private store  : Store) {
  }
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogin),
      switchMap(({username, password}) => {
          // debugger;
          // console.log("username hh : ",username);
          return this.authService.login(username, password).pipe(
            map((authState: AuthState) => {
              this.cookieService.set('accessToken', authState.token.access_token);
              this.cookieService.set('refreshToken', authState.token.refresh_token);
              return loginSuccess({authState})
            }),
            catchError(error => of(loginFailure({error})))
          )
        }
      )
    )
  );

  // storeToken$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(storeToken),
  //     map(({token}) => {
  //       debugger
  //       this.cookieService.set('token', token.token);
  //       return loginSuccess({authState})
  //     })
  //   )
  // );

}
