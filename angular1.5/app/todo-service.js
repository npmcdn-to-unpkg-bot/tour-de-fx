var TodoModel = require('./todo-model')
module.exports = function () {
  return {
    todos: [
      new TodoModel('one'),
      new TodoModel('two')
    ],
    addTodo: function (todo) {
      this.todos = this.todos.concat([todo])
    }
  }
}
