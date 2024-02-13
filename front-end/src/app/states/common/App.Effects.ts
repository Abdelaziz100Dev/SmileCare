import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {MatSnackBar} from "@angular/material/snack-bar";
import {exhaustMap} from "rxjs";
import {map} from "rxjs/operators";
import {emptyAction, showAlert} from "./App.Action";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private snack_bar: MatSnackBar) {
  }

  _showAlert = createEffect(() =>
    this.actions$.pipe(
      ofType(showAlert),
      exhaustMap((action) => {
          return this.showSnackAlert(action.message, action.resultType).afterDismissed().pipe(
            map(() => emptyAction())
          )
        }
      )
    )
  );

  showSnackAlert(message: string, resultType: string = "fail") {
    let _class = resultType == "fail" ? "green-snack-bar" : "red-snack-bar";
    return this.snack_bar.open(message, "ok", {
      panelClass: [_class],
      verticalPosition: "top",
      horizontalPosition: "center",
      duration: 2000,
    });
  }
}
