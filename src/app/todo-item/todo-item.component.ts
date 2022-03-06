import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todo } from '../todo/todo.model';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: todo = {id: 0, title: ''};
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number){
    this.deleteTodo.emit(id);
  }

}
