var myObjectJSON = require('./example.json')
checkProperty('email', myObjectJSON)
checkProperty('address', myObjectJSON)
function checkProperty (nameProperty, objectName) {
  if (objectName[nameProperty]) console.log('Congratulations. Property ' + nameProperty + ' has the value ' + objectName[nameProperty])
  else console.log('Ops!!! Property ' + nameProperty + ' doesn\'t exist!!!')
}
