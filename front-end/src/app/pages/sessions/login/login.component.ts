import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {requestLogin} from "../../../states/auth/authActions";
import {selectToken} from "../../../states/auth/authSelectors";
import {take} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  token = '';
  error = '';
  isLoading = false;

  constructor(private store: Store) {

    //   this.store.select(selectError).subscribe(error => (this.error = error));
    //   this.store.select(selectIsLoading).subscribe(isLoading => (this.isLoading = isLoading));
  }

  ngOnInit() {
    // Subscribe to the token selector
    // this.store.select(selectToken)
    //   .pipe(take(1)) // Take only one emission to avoid multiple subscriptions
    //   .subscribe(token => {
    //     console.log('Token received:', token);
    //     // this.token = token; // Update the token property in the component
    //   });
  }

  onSubmit() {
    console.log("username hh : ", this.username);
    // debugger;
    this.store.dispatch(requestLogin({username: this.username, password: this.password}));
    this.store.select(selectToken)
      .pipe(take(1)) // Take only one emission to avoid multiple subscriptions
      .subscribe(token => {
        // console.log('Token received:', token);
        // this.token = token; // Update the token property in the component
      });


  }
}
