import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadTasks} from "../../states/task/actions";
import {Task} from "../../model/taskModel";
import {Tasks} from "../../states/task/selector";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {AddTaskComponent} from "../add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Observable<Task[]> = this.store.select(Tasks) ;
  dataSource:any ;
  displayedColumns: string[] = [ 'id', 'title', 'description', 'status'];

  constructor(private store: Store<any>,private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.store.dispatch(loadTasks());
    // this.store.select(Tasks).subscribe((tasks) => {
    //   this.tasks = tasks
    //   this.dataSource = new MatTableDataSource<Task>(this.tasks);
    //   console.log("tasks   --- > : ",this.tasks);
    // });
  }
  createTask() {
    this.OpenPopup(0,"Add Task");
  }

  editTask(task:any) {
    this.OpenPopup(task,"Edit Task");

  }

  deleteTask(task:any) {

  }

  private OpenPopup(code: number, title: string) {

    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: "50%",
      data: { code: code, title: title },
    });


  }
}
