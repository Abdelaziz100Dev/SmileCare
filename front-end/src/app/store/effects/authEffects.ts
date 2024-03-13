import {Injectable} from '@angular/core';
// import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, catchError, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
// import {loginFailure, loginSuccess, requestLogin, requestRegister, storeToken} from "./authActions";
// import {AuthService} from "./AuthService";
import {CookieService} from "ngx-cookie-service";
// import {AuthState} from "./authState";
import {Store} from "@ngrx/store";
import {Action} from "rxjs/internal/scheduler/Action";
import {createEffect, ofType,Actions} from "@ngrx/effects";
import {AuthState} from "../../interfaces/authStats";
import {AuthService} from "../../services/http/authService";
import {loginFailure, loginSuccess, requestLogin} from "../actions/login.actions";
import {Router} from "@angular/router";

@Injectable()
export class LoginEffects {

    constructor(private actions$: Actions, private authService: AuthService, private cookieService: CookieService,private store  : Store,private router : Router) {
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
                            this.router.navigate(['/vertical/default-dashboard']);

                            return loginSuccess({authState})
                        }),
                        catchError(error => of(loginFailure({error})))
                    )
                }
            )
        )
    );

    // register$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(requestRegister),
    //         switchMap(({username, password}) => {
    //                 // debugger;
    //                 // console.log("username hh : ",username);
    //                 return this.authService.register(username, password).pipe(
    //                     map((authState: AuthState) => {
    //                         this.cookieService.set('accessToken', authState.token.access_token);
    //                         this.cookieService.set('refreshToken', authState.token.refresh_token);
    //                         return loginSuccess({authState})
    //                     }),
    //                     catchError(error => of(loginFailure({error})))
    //                 )
    //             }
    //         )
    //     )
    // );

}
