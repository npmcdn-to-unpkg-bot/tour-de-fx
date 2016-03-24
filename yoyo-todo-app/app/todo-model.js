var uuid = require('npm:uuid')

function TodoModel (title) {
  this.id = uuid.v4()
  this.title = title
  this.status = 'started'
}

TodoModel.prototype.toggle = function () {
  this.status = this.status === 'started' ? 'completed' : 'started'
}

module.exports = TodoModel