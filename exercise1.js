var http = require('http')
var server = http.createServer()

server.on('request', function (request, response) {
  response.end('my response')
})

// as a parameter
// var port = process.argv[2]

// as an environment variable
var PORT = process.env.PORT || 3000 // 3000 is the default value
server.listen(PORT)
console.log('Success, i\'m listening at port: ' + PORT)
