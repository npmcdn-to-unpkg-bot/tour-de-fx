var yo = require('npm:yo-yo')

module.exports = function (state) {
  return yo`
    <ul>${state.todos.map(li)}</ul>
  `
}

function li (todo) {
  return yo`
    <li>
      <span class="${todo.status}">${todo.title}</span>
      <button id="${todo.id}" class="todo-toggle">Toggle</button>
    </li>
  `
}