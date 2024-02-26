import {createAction, props} from "@ngrx/store";
import {Injectable} from "@angular/core";
import {Actions} from "@ngrx/effects";
// import {TaskService} from "../../services/task.service";
import {Task} from "../../model/taskModel";
// import {CREATE_TASK_BEGIN} from "../task/actions";

export const SHOW_ALERT = '[app] Show Allert';
export const EMPTY_ACTION = '[app] Empty Action';

export const showAlert = createAction(
  SHOW_ALERT,
  props<{ message: string,resultType:string }>());
// export const showAlert = createAction(
//   CREATE_TASK_BEGIN,props<{ taskToAdd: Task}>()
// );
export const emptyAction = createAction(EMPTY_ACTION);
