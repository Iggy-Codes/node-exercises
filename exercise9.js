(function () {
  var fs = require('fs')
  var fileName = process.argv[2]
  var wordToFind = process.argv[3]
  fs.readFile(fileName, 'utf-8', findTheWord)
  function findTheWord (error, data) {
    if (error) throw error
    console.log('Result: ' + (data.split(wordToFind).length - 1))
  }
})()
