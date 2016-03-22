function TodoModel(title) {
  this.title = title
  this.status = 'started'
}

TodoModel.prototype.toggle = function () {
  this.status = this.status === 'started' ? 'completed' : 'started'
}

module.exports = TodoModel 
