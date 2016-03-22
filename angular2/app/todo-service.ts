import {Injectable} from 'angular2/core'
import {TodoModel} from './todo-model'

@Injectable()
export class TodoService {
  todos = [
    new TodoModel('one'),
    new TodoModel('two')
  ];
  addTodo(todo) {
    this.todos = [...this.todos, todo]
  }
}
