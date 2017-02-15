var https = require('https')
var fs = require('fs')
var link = 'https://nodejs.org/api/all.html'
var textToSearch = process.argv[2]

https.get(link, function (res) {
  var statusCode = res.statusCode
  var contentType = res.headers['content-type']
  console.log(statusCode)
  console.log(contentType)

  var error
  if (statusCode !== 200) {
    error = new Error(`Request Failed.\n` +
                      `Status Code: ${statusCode}`)
  } else if (!/^text\/html/.test(contentType)) {
    error = new Error(`Invalid content-type.\n` +
                      `Expected application/json but received ${contentType}`)
  }
  if (error) {
    console.log(error.message)
    // consume response data to free up memory
    res.resume()
    return
  }

  res.setEncoding('utf8')
  let rawData = ''
  res.on('data', function (data) {
    rawData += data
  })
  res.on('end', function () {
    try {
      console.log(rawData)
      var regexp = /href="(#.+)"/gm
      var result = rawData.match(regexp)
      // console.log('busqueda links')
      // console.log(result)
      console.log(result.length)
      console.log('-----------')
      console.log(result[0])
      console.log('-----------')
      console.log(result[result.length - 1])
      // console.log(result[0])
      // console.log(result[1])
      // var regexp2 = new RegExp(textToSearch, 'i')
      // result.map(function (element) {
      //   if (regexp2.test(element)) return true
      //   return false
      // })
      // console.log(result)
    } catch (e) {
      console.log(e.message)
    }
  })
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`)
})
