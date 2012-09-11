var spawn = require('child_process').spawn
  , path  = require('path')

module.exports = function (lang, format, code, callback) {
  var exec = spawn(path.join(__dirname, 'pygments/pygmentize'), [ '-f', format, '-l', lang, '-P', 'encoding=utf8' ])
    , stdout = []
    , stderr = ''

  exec.stdout.on('data', function(data) {
    stdout.push(data)
  })
  exec.stderr.on('data', function (data) {
    stderr += data.toString()
  })
  exec.on('exit', function (code) {
    if (code !== 0) return callback('Error: ' + stderr)

    var buf = new Buffer(stdout.reduce(function (p, c) { return p + c.length }, 0))
      , i = 0

    stdout.forEach(function(s) {
      s.copy(buf, i, 0, s.length)
      i += s.length
    })

    callback(null, buf)
  })
  exec.stdin.write(code)
  exec.stdin.end()
}