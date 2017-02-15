// Asynchronous
// -----------
var fs = require('fs')
// __dirname : is the directory where the file is
// process.cwd(): is the directory where node is executing
// in this case are the same, but NOT ALWAYS
fs.readdir(__dirname, function (error, data) {
  if (error) throw error
  data.forEach(function (item) {
    fs.lstat(item, function (error, stat) {
      if (error) throw error
      var prefix
      if (stat.isFile()) prefix = 'FILE'
      else if (stat.isDirectory()) prefix = 'DIR  '
      else prefix = '??? '
      console.log(prefix + '=> ' + item)
    })
  })
})

// Synchronous
// -----------
console.log('\n\n Synchronous')
fs.readdirSync(__dirname).forEach(function (item) {
  var stat = fs.lstatSync(item)
  var prefix
  if (stat.isFile()) prefix = 'FILE'
  else if (stat.isDirectory()) prefix = 'DIR  '
  else prefix = '??? '
  console.log(prefix + '=> ' + item + ' Synchronous')
})
