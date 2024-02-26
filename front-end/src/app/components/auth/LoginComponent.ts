// import {Component, OnInit} from '@angular/core';
// import { Store } from '@ngrx/store';
// import {selectToken} from "../../states/auth/authSelectors";
// import {requestLogin} from "../../states/auth/authActions";
// import {take} from "rxjs";
// // import { login } from './store/login.actions';
// // import { selectToken, selectError, selectIsLoading } from './store/login.selectors';
//
// @Component({
//   selector: 'app-login',
//   template: `
//     <form (ngSubmit)="onSubmit()">
//       <label>
//         Username:
//         <input type="text" [(ngModel)]="username" name="username" required>
//       </label>
//       <br>
//       <label>
//         Password:
//         <input type="password" [(ngModel)]="password" name="password" required>
//       </label>
//       <br>
//       <button type="submit" [disabled]="isLoading">Login</button>
//     </form>
//     <div *ngIf="error">{{ error }}</div>
//     <div *ngIf="token">Welcome, {{ username }}! Your token is {{ token }}</div>
//   `
// })
// export class LoginComponent implements OnInit{
//   username = '';
//   password = '';
//   token = '';
//   error = '';
//   isLoading = false;
//
//   constructor(private store: Store) {
//
//   //   this.store.select(selectError).subscribe(error => (this.error = error));
//   //   this.store.select(selectIsLoading).subscribe(isLoading => (this.isLoading = isLoading));
//   }
//   ngOnInit() {
//     // Subscribe to the token selector
//     // this.store.select(selectToken)
//     //   .pipe(take(1)) // Take only one emission to avoid multiple subscriptions
//     //   .subscribe(token => {
//     //     console.log('Token received:', token);
//     //     // this.token = token; // Update the token property in the component
//     //   });
//   }
//
//   onSubmit() {
//     console.log("username hh : ",this.username);
//     // debugger;
//     this.store.dispatch(requestLogin({ username: this.username, password: this.password }));
//     this.store.select(selectToken)
//       .pipe(take(1)) // Take only one emission to avoid multiple subscriptions
//       .subscribe(token => {
//         // console.log('Token received:', token);
//         // this.token = token; // Update the token property in the component
//       });
//   }
// }
