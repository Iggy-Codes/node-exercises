var fs = require('fs')
fs.readFile('example.json', 'utf-8', function (error, data) {
  if (error) throw error
  JSON.parse(data, function (key, value) {
    console.log(key + '=>' + value.toString())
  })
})

