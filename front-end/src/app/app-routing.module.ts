import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from "./components/List-tasks/tasks.component";
import {LoginComponent} from "./components/auth/LoginComponent";

const routes: Routes = [
  {path : "tasks", component: TasksComponent },
  {path : "auth/login", component: LoginComponent},
  // {path : "competition/create", component: CreateComponent},
  // {path : "competition/:id/assign-members", component: AssignMembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
