import { Component,  TemplateRef, Input, ElementRef } from '@angular/core';

interface Task{
 title: string,
 is_canceled: boolean
 
}
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
 
})
export class AppComponent {
 tasks: Array<Task> = [];

 addTask(input: { value: string; }){
   let value = input.value;
   input.value = "";
   this.tasks.push(
     {
       title: value,
       is_canceled: false
     });
 }


 deleteTask(idx: number){
   let do_delete = confirm("Are you sure to delete the task?");
   if (do_delete){
     this.tasks.splice(idx, 1);
   }
 }

 editTask(idx: number){
   let title = this.tasks[idx].title;
   let result = prompt("Enter task", title);
   if (result !== null && result !== ""){
     this.tasks[idx].title = result;
   }
 }
}