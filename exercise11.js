(function () {
  var fileName = process.argv[2] ? process.argv[2] : 'example.html'
  var fileContent = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>Node Exercise 10</title>\n</head>\n<body>\n<h1>Page Title</h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, molestias.</p></body></html>'
  var fs = require('fs')
  fs.writeFile(fileName, fileContent, function (error) {
    if (error) throw error
    console.log('File saved with name: ' + fileContent)
  })
  var http = require('http')
  var hostname = '127.0.0.1'
  var PORT = 8080

  var server = http.createServer()

  server.listen(PORT, hostname)
  server.on('request', function (request, response) {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    fs.readFile(fileName, 'utf-8', function (error, data) {
      if (error) throw error
      response.end(data)
    })
  })
})()
