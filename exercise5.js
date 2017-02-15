var fs = require('fs')
var fileName = process.argv[2]
var content = process.argv[3]
fs.writeFile(fileName, content, function (error) {
  if (error) throw error
  console.log('File saved')
  fs.readFile(fileName, 'utf-8', function (error, data) {
    if (error) throw error
    console.log(data)
  })
})
