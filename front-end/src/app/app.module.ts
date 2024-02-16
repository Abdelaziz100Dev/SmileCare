import {isDevMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { TasksComponent } from './components/List-tasks/tasks.component';
// import {taskReducer} from "./states/task/reducer";
import {TaskEffects} from "./states/task/Task.Effectes";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AppEffects} from "./states/common/App.Effects";
import {taskReducer} from "./states/task/Task-Reducer";
import { AddTaskComponent } from './components/add-task/add-task.component';
import {MaterialModule} from "./Material.Module";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {MatChipsModule} from "@angular/material/chips";
// import { StandaloneComponentsComponent } from './components/standalone-components/standalone-components.component';
// import { ChipsInputExampleComponent } from './components/standaloneComponents/chips-input-example/chips-input-example.component';
import { ChipsInputComponent } from './components/standaloneComponents/chips-input/chips-input.component';
import {LoginComponent} from "./components/auth/LoginComponent";
import {userReducer} from "./states/auth/authReducer";
import {LoginEffects} from "./states/auth/authEffects";


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskComponent,
    LoginComponent
    // StandaloneComponentsComponent,
    // ChipsInputExampleComponent,
    // ChipsInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // NgOptimizedImage,
    BrowserAnimationsModule,
    MdbCheckboxModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatButtonModule,
    //Ngrx modules
    StoreModule.forRoot({tasks: taskReducer,user:userReducer}),
    EffectsModule.forRoot([TaskEffects, AppEffects,LoginEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MaterialModule,
    MatDatepickerModule,
    MatLegacyChipsModule,
    MatChipsModule,
    ChipsInputComponent,
    // for debugging purposes only in development mode (remove in production), it gives us a nice UI to see the state of our store

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
