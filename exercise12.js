(function () {
  var fileName = process.argv[2] ? process.argv[2] : 'example.html'
  var html = require('html')
  var fileContent = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Node Exercise 10</title></head><body><h1>Page Title</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, molestias.</p><script>function sayHello() { console.log("Hello") } window.onload=sayHello()</script></body></html>'
  var prettyData = html.prettyPrint(fileContent, {indent_size: 2})
  // CREATE FILE
  var fs = require('fs')
  fs.writeFile(fileName, prettyData, function (error) {
    if (error) throw error
    console.log('File saved with name: ' + fileContent)
  })
  // CREATE SERVER
  var http = require('http')
  var server = http.createServer()
  var hostname = '127.0.0.1'
  var PORT = 8080
  server.listen(PORT, hostname)
  server.on('request', returnPage)

  function returnPage (request, response) {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    fs.readFile(fileName, 'utf-8', function (error, data) {
      if (error) throw error
      response.end(data)
    })
  }
})()
