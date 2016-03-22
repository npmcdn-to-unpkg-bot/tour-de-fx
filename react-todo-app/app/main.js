var React = require('npm:react')
var ReactDOM = require('npm:react-dom')
var hyperx = require('npm:hyperx')
var hx = hyperx(React.createElement)
var TodoInput = require('./todo-input')

ReactDOM.render(
  hx`
    <div>
      <h1>Todo App</h1>
      <TodoInput />
    </div>
  `,
  document.getElementById('app')
)
