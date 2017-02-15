var https = require('https')
var fs = require('fs')
var link = 'https://nodejs.org/api/all.html'
var textToSearch = (process.argv[2]) ? process.argv[2] : 'createserver'
var fileName = './internal_links.txt'

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
      var regexp = new RegExp('href="#.*' + textToSearch + '.*"', 'gmi')
      var result = rawData.match(regexp)
      // Cut the href=" at the beginning and if there is something after a " at the end
      // Add the page at the begining of the link
      result = result.map(arrangeInternalLinks)
      // Ordenate the array and erase duplicate results
      var resultUnique = result.sort().filter(function (element, index) {
        if (index === 0) return true
        else return (element !== result[index - 1])
      })
      fs.writeFile(fileName, resultUnique.join('\n'), handlerWriteFile)
      fs.readFile(fileName, 'utf-8', handlerReadFile)
    } catch (e) {
      console.log(e.message)
    }
  })
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`)
})

function arrangeInternalLinks (element) {
  var out = element.replace('href="', '')
  out = (out.indexOf('"') > 0) ? out.substring(0, out.indexOf('"')) : out
  out = link + out
  return out
}

function handlerWriteFile (error) {
  if (error) throw error
  console.log('File saved')
}

function handlerReadFile (error, data) {
  if (error) throw error
  console.log('File ' + fileName + ' read and contains: ')
  console.log(data)
}

