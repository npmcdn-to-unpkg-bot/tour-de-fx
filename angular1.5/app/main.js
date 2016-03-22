var angular = require('npm:angular')

angular.module('app', [])
  .component('myApp', {
    templateUrl: 'app/templates/main.html'
  })
  .component('todoInput', require('./todo-input'))
  .component('todoList', require('./todo-list'))
  .component('todoItem', require('./todo-item'))
  .factory('todoService', require('./todo-service'))
