// import {Component, Inject, OnInit} from '@angular/core';
// import {FormBuilder, Validators} from "@angular/forms";
// import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
// import {Store} from "@ngrx/store";
// import {createTask} from "../../states/task/actions";
// import {Task} from "../../model/taskModel";
// import {TaskStatus} from "../../enums/TaskStatus";
// import {COMMA, ENTER} from "@angular/cdk/keycodes";
// import {Fruit} from "../standaloneComponents/chips-input/chips-input.component";
//
// @Component({
//   selector: 'app-add-task',
//   templateUrl: './add-task.component.html',
//   styleUrls: ['./add-task.component.css']
// })
// export class AddTaskComponent implements  OnInit{
//   separatorKeysCodes: number[] = [ENTER, COMMA];
//   private dialogData: any;
//   private title: any;
//   isEdite: boolean = false;
//   tags: string[] = [];
//   taskStatusOptions: TaskStatus[] = [TaskStatus.TODO, TaskStatus.DOING, TaskStatus.DONE];
//
//
//     constructor(private builder:FormBuilder, private ref:MatDialogRef<AddTaskComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private store:Store) { }
//
//     ngOnInit(): void {
//       this.dialogData = this.data;
//       this.title = this.dialogData.title;
//     }
//     taskForm = this.builder.group({
//       id:[0,Validators.required],
//       title: ['',Validators.required],
//       description:['',Validators.compose([Validators.required,Validators.minLength(10)])],
//       startDate:['',Validators.required],
//       dueDate:['',Validators.required],
//       // createdDate:[null,Validators.required],
//       // status:[TaskStatus.TODO,Validators.required],
//       tags:[null,Validators.required],
//
//
//     });
//
//
//   SaveTask() {
//     console.log("taskForm : ",this.taskForm.value);
//     console.log(" ::;",this.tags)
//
//     // if (this.taskForm.valid) {
//       const taskToAdd: Task =
//         {
//         ...this.taskForm.value as Task,
//         tags:this.tags
//       } ;
//     // const taskToAdd2: Task =    {
//     //       id: 0,
//     //       title: "abdelaziz",
//     //       description: "string",
//     //       startDate:new Date( "2024-01-17"),
//     //       dueDate:new Date("2024-01-23"),
//     //       tags: [
//     //         "string",
//     //         "ll"
//     //       ]
//     //     }
//     //   console.log("taskToAdd >> : ",taskToAdd);
//     //   console.log("taskToAdd 2 >> : ",taskToAdd2);
//
//       this.store.dispatch(createTask({taskToAdd }));
//       this.ref.close(); // Optionally, close the dialog after saving the task
//     }
//   // }
// // const obj =
//
//   updateTask() {
//     // if (this.taskForm.valid) {
//       const taskToAdd: Task =
//         {
//         ...this.taskForm.value as Task,
//         tags:this.tags
//       } ;
//       this.store.dispatch(createTask({taskToAdd }));
//       this.ref.close(); // Optionally, close the dialog after saving the task
//     // }
//   }
//
// }
//
//
