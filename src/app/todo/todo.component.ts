import { Component, OnInit } from '@angular/core';
import { todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todoValue: string = '';

  public todos : todo[] = [
    {id: 1, title: 'Danas cu da kodiram 8 sati.'},
    {id: 2, title: 'Danas cu da ucim angular.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(todo: string){
    this.todos.push({id: this.todos.length + 1, title: todo})
    console.log(this.todos)
  }

  onDelete(id:number){
    console.log(id);
    this.todos = this.todos.filter(todo => todo.id != id);
    console.log(this.todos);
  }
}
