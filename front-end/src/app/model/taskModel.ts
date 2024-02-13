import {TaskStatus} from "../enums/TaskStatus";

export interface Task {
  id: number|undefined|null;
  title: string |undefined|null;
  description: string |null;
  createdDate?: Date |null;
  startDate: Date |null;
  dueDate: Date|null;
  status?: TaskStatus|null;
  tags: string[] |null;
}
export interface CreatTask {
  id: number|undefined|null;
  title: string |undefined|null;
  description: string |null;
  // createdDate: Date |null;
  startDate: Date |null;
  dueDate: Date|null;
  // status: TaskStatus|null;
  tags: string[] |null;
}

export interface TaskModel {
  list: Task[];
  taskObj: Task;
  errorMessage: string;
 }
