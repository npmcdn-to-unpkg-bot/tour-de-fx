// dependencies
var yo = require('npm:yo-yo')
var most = require('npm:most@0.18.3')
var serialize = require('npm:form-serialize')
var R = require('npm:ramda')

// model
var TodoModel = require('./todo-model')

// components
var todoInput = require('./todo-input')
var todoList = require('./todo-list')

// functional helpers
var findAndToggleTodo = require('./find-toggle-todo')

// state
var state = {
  todos: [
    new TodoModel('one'),
    new TodoModel('two')
  ]
}

// initial render
var el = render(state)
document.body.appendChild(el)

// main render function
function render (state) {
  return yo`
    <div>
      <h1>Todo App</h1>
      ${todoInput(state)}
      ${todoList(state)}
    </div>
  `
}

// handle form submit
most.fromEvent('submit', document)
  .map(e => {
    e.preventDefault()
    return e  
  })
  .map(e => e.srcElement)
  .map(el => serialize(el, {hash: true}))
  .map(obj => R.concat(state.todos, [new TodoModel(obj.title)]))
  .observe(todos => {
    state.todos = todos
    yo.update(el, render(state))
  })

// handle toggle
most.fromEvent('click', document)
  .map(e => e.srcElement)
  .map(findAndToggleTodo(state))
  .observe(state => {
    yo.update(el, render(state))
  })