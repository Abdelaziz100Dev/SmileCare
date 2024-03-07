import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {requestLogin} from "../../../store/actions/login.actions";
import {Store} from "@ngrx/store";
import {take} from "rxjs";
import {selectToken} from "../../../store/selectors/authSelectors";
import {Router} from "@angular/router";
import {consoleLog} from "echarts/types/src/util/log";
import {AuthState} from "../../../interfaces/authStats";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  @Output() errorOccurred: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder,private store: Store,private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log("username hh : ",this.loginForm.value.login);
    // debugger;
    this.store.dispatch(requestLogin({ username: this.loginForm.value.login, password: this.loginForm.value.pass }));

    this.store.select(selectToken)
        .pipe(take(1)) // Take only one emission to avoid multiple subscriptions
        .subscribe((res:AuthState) => {
          res.error && this.errorOccurred.emit(res.error.message);
          console.log("res : ",res.error.message);

          // console.log('Token received:', token);
          // this.token = token; // Update the token property in the component
        });
  }
}
