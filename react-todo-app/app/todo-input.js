var React = require('npm:react')
var hyperx = require('npm:hyperx')
var hx = hyperx(React.createElement)

module.exports = function () {
  return hx`
    <div key='1'>
      <input type="text" placeholder="enter todo">
    </div>
  `
}
