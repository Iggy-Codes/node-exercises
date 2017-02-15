var fs = require('fs')
var fileName = process.argv[2]

// Read synchronous
try {
  console.log(fs.readFileSync(fileName, 'utf-8'))
} catch (e) {
  console.log(e)
  console.log('end syncrhonous error message')
}

// Read asynchronous
fs.readFile(fileName, 'utf-8', function (error, data) {
  if (error) throw error
  console.log(data)
})
