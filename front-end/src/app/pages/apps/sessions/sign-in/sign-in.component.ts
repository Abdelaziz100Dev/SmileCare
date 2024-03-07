import { Component, OnInit } from '@angular/core';
import {selectToken} from "../../../../store/selectors/authSelectors";
import {take} from "rxjs";

@Component({
  selector: 'page-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class PageSignInComponent implements OnInit {
  display= "block";
  displayType: boolean = false;
  errorMessage: string = '';
  constructor() { }

  ngOnInit() { }
//   this.store.select(selectToken)
// .pipe(take(1)) // Take only one emission to avoid multiple subscriptions
// .subscribe(token => {
//
//   // console.log('Token received:', token);
//   // this.token = token; // Update the token property in the component
// });


  showErrorAlert(message: string) {
    console.log(message + ' from sign-in.component.ts')
    this.displayType = true;
    this.errorMessage = message;
  }
}
