// First solution
// --------------
// var fs = require('fs')
// fs.readFile('local.txt', 'utf-8', function (error, data) {
//   if (error) throw error
//   console.log(data.split(' '))
// })

var fs = require('fs')
var concat = require('concat-stream')

var streamFileRead = fs.createReadStream('test.txt', 'utf-8')

var addAndManageChunksData = concat(function (totalText) {
  console.log('There are ' + totalText.split(' ').length + ' words in the file')
  console.log(totalText.split(' '))
}) // returns a writable stream

streamFileRead
  .pipe(addAndManageChunksData)
