import {Component, Input} from 'angular2/core'

@Component({
  selector: 'todo-item',
  template: `
    <style>
      .completed {
        text-decoration: line-through;
      }
    </style>
    <span [ngClass]="todo.status">{{todo.title}}</span>
    <button (click)="todo.toggle()">Toggle Complete</button>
  `
})

export class TodoItem {
  @Input() todo
}
