// // task.effects.ts
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import {exhaust, mergeMap, of,exhaustMap} from 'rxjs';
// import { catchError, map, switchMap } from 'rxjs/operators';
//
// import * as TaskActions from './actions';
// import { TaskService } from '../../services/task.service';
// import {createTask, loadTasks, loadTasksSuccess} from "./actions";
// import {showAlert} from "../common/App.Action";
//
//
// @Injectable()
// export class TaskEffects {
//   constructor(private actions$: Actions, private taskService: TaskService) {}
//
//   _loadTasks = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadTasks),
//       exhaustMap((action) =>
//         this.taskService.getTasks().pipe(
//           map((data) => TaskActions.loadTasksSuccess({ list:data })),
//           catchError((_error) => of(TaskActions.loadTasksFail({ errorMessage: _error })))
//         )
//       )
//     )
//   );
//
//   _createTask = createEffect(() =>
//     this.actions$.pipe(
//       ofType(createTask),
//       switchMap((action) =>
//         this.taskService.addTask(action.taskToAdd).pipe(
//           switchMap((data) => {
//             return of(TaskActions.createTaskSuccess({ taskToAdd:data }),
//             showAlert({message:"Task created successfully",resultType:"success"}))
//           }),
//           catchError((_error) => of(showAlert({message:"Task creation failed",resultType:"fail"})))
//         )
//       )
//     )
//   );
//
//   _updateTask = createEffect(() =>
//     this.actions$.pipe(
//       ofType(TaskActions.updateTask),
//       switchMap((action) =>
//         this.taskService.updateTask(action.updateData).pipe(
//           switchMap((data) => {
//             return of(TaskActions.updateTaskSuccess({ updateData:data }),
//               showAlert({message:"Task updated successfully",resultType:"success"}))
//           }),
//           catchError((_error) => of(showAlert({message:"Task update failed",resultType:"fail"})))
//         )
//       )
//     )
//   );
//
//
// }
