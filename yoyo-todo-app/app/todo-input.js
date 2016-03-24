var yo = require('npm:yo-yo')

module.exports = function (state) {
  return yo`
    <form>
      <input type="text" name="title">
    </form>
  `
}