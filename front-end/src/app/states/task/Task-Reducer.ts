// task.Task-Reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './actions';
import { TaskState } from './TaskState';
import {loadTasksSuccess} from "./actions";

export const _TaskReducer = createReducer(
  TaskState, // Assuming TaskState is your initial state
  on(TaskActions.loadTasksSuccess,
    (state,action) => {
      return {
        ...state,
        list: action.list,
      };
    }
  ),
  on(TaskActions.loadTasksFail,
    (state,action) => {
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    }
    ),
  // task creation
  on(TaskActions.createTaskSuccess,
    (state,action) => {

      return {
        ...state,
        list: [...state.list,action.taskToAdd],
        errorMessage: "",
      };
    }
  )
  ,
  // task update
  on(TaskActions.updateTaskSuccess,
    (state,action) => {
      const index = state.list.findIndex((task)=>task.id===action.updateData.id);
      const updatedTasks = [...state.list];
      updatedTasks[index] = action.updateData;
      return {
        ...state,
        list: updatedTasks,
        errorMessage: "",
      };
    }
  ),


);

export function taskReducer(state:any, action: any) {
  return _TaskReducer(state, action);

}

