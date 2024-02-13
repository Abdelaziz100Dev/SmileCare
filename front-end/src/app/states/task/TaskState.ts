import {Task, TaskModel} from "../../model/taskModel";
import {TaskStatus, TaskStatusEnum} from "../../enums/TaskStatus";

export const TaskState:TaskModel = {
  list: [],
  errorMessage:"",
  taskObj:{
    id: null,
    title: "",
    description: "",
    createdDate:null,
    startDate:null,
    dueDate: null,
    status: TaskStatus.TODO,
    tags: []
  }
}


