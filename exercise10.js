(function () {
  var fs = require('fs')
  var fileName = process.argv[2]
  fs.readFile(fileName, 'utf-8', sumNumbers)
  function sumNumbers (error, data) {
    if (error) throw error
    console.log(data.split(' ').reduce(function (acc, value) {
      return acc + Number(value)
    }, 0))
  }
})()
