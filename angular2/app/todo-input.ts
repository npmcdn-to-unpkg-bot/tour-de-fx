import {Component, Inject} from 'angular2/core'
import {TodoModel} from './todo-model'
import {TodoService} from './todo-service'

@Component({
  selector: 'todo-input',
  template: `
    <form (submit)="onSubmit($event)">
      <input type="text"
        placeholder="Enter Todo"
        [(ngModel)]="todo.title">
    </form>
  `
})
export class TodoInput {
  todo = new TodoModel('')
  todoService;

  constructor(@Inject(TodoService) todoService) {
    this.todoService = todoService
  }
  onSubmit($event) {
    $event.preventDefault()
    this.todoService.addTodo(this.todo)
    this.todo = new TodoModel('')
  }
}
