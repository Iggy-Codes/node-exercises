var fs = require('fs')
var request = require('request')
fs.readFile('link.txt', 'utf-8', function (error, link) {
  if (error) throw error
  request(link, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }
  })
})
