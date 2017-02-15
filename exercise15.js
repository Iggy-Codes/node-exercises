var myObjectJSON = require('./example.json')
printObject(myObjectJSON)
console.log('Email deleted')
delete myObjectJSON['email']
printObject(myObjectJSON)
function printObject (object) {
  for (var key in object) {
    console.log(key + '=>' + myObjectJSON[key])
  }
}
