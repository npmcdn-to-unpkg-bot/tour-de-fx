module.exports = {
  templateUrl: 'app/templates/todo-list.html',
  controller: ['todoService', todoList]
}

function todoList (todoService) {
  this.todoService = todoService
}
