var myObjectJSON = require('./example.json')
for (var key in myObjectJSON) {
  console.log(key + '=>' + myObjectJSON[key])
}
