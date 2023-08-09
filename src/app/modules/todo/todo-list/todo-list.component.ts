import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  comStatus:string="not Completed"

  constructor(){}



  updateStatus(){
    console.log("fdsdsf")
  }
}
