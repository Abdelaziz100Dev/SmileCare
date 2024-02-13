import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {env} from "../../enviroments/enviroment";
import {TaskModel} from "../model/taskModel";
import {Task} from "../model/taskModel";
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

   getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(env.host+"/api/tasks");
   }
    addTask(task:Task):Observable<Task>{
      return this.http.post<Task>(env.host+"/api/tasks",task);
    }
  updateTask(task:Task):Observable<Task>{
      return this.http.put<Task>(env.host+"/api/tasks",task);
    }

}
