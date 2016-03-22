import {Component, Inject} from 'angular2/core'
import {TodoService} from './todo-service'
import {TodoItem} from './todo-item'

@Component({
  selector: 'todo-list',
  directives: [TodoItem],
  template: `
    <ul>
      <li *ngFor="#todo of todoService.todos">
        <todo-item [todo]="todo"></todo-item>
      </li>
    </ul>
  `
})
export class TodoList {
  todoService;
  constructor(@Inject(TodoService) todoService) {
    this.todoService = todoService
  }

}
