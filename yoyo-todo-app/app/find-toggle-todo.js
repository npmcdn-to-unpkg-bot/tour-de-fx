var R = require('npm:ramda')

module.exports = R.curry((state, el) => {
  var toggleTodo = R.curry((id, todo) => {
    if (todo.id === id) todo.toggle()
    return todo 
  })

  state.todos = state.todos.map(toggleTodo(el.id))
  return state 
})