
import { createAction, props } from '@ngrx/store';
import {Task, TaskModel} from "../../model/taskModel";

export const LOAD_TASKS = '[Tasks] Load Tasks ?';
export const LOAD_TASKS_SUCCESS = '[Tasks] Load Tasks success ?';
export const LOAD_TASKS_FAIL = '[Tasks] Load Tasks fail ?';
export const loadTasks = createAction(LOAD_TASKS);
export const loadTasksSuccess = createAction(LOAD_TASKS_SUCCESS, props<{ list: Task[] }>());
export const loadTasksFail = createAction(LOAD_TASKS_FAIL, props<{ errorMessage: string }>());



export const CREATE_TASK_BEGIN = '[Task] create Task ?';
export const CREATE_TASK_SUCCESS = '[Task] create Task success ?';
export const CREATE_TASK_ERROR = '[Task] create Task success ?';
export const createTask = createAction(
  CREATE_TASK_BEGIN,props<{ taskToAdd: Task}>()
);
//
export const createTaskSuccess = createAction(
  CREATE_TASK_SUCCESS,
  props<{ taskToAdd: Task }>()
);
export const createTaskError = createAction(
  CREATE_TASK_ERROR,
  props<{ errorMessage: string }>()
);

// update task
export const UPDATE_TASK_BEGIN = '[Task] update Task ?';
export const UPDATE_TASK_SUCCESS = '[Task] update Task success ?';
export const UPDATE_TASK_ERROR = '[Task] update Task success ?';
export const updateTask = createAction(
  UPDATE_TASK_BEGIN,props<{ updateData: Task}>()
);

export const updateTaskSuccess = createAction(
  UPDATE_TASK_SUCCESS,
  props<{ updateData: Task }>()
);
export const updateTaskError = createAction(
  UPDATE_TASK_ERROR,
  props<{ errorMessage: string }>()
);
