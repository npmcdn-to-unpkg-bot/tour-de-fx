var TodoModel = require('./todo-model')

module.exports = {
  templateUrl: 'app/templates/todo-input.html',
  controller: ['todoService', todoInput]
}

function todoInput (todoService) {
  this.todo = new TodoModel('')
  this.onSubmit = function ($event) {
    $event.preventDefault()
    todoService.addTodo(this.todo)
    this.todo = new TodoModel('')
  }
}
