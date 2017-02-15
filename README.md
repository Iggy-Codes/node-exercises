# Node Exercises
Node exercises solved during Skylab Coders Academy's MEAN Stack bootcamp

## 1. Connection to the server

Write a node.JS program that execute a connection to server and return success message like *"Success, i'm listening from port: 3000"*

_Hint: Yo
u need npm module - http_

### Extra

Set the port of the connection using an environment variable PORT

[My solution](./exercise1.js)

## 2. Show Content

Write a node program that read a file (passed as parameter) in local machine and shows in the console the content of it.

    node app.js test.txt

_Hint: You need npm module - [`fs`](https://nodejs.org/api/fs.html)_

[My solution](./exercise2.js)

## 3. HTML Code

Write a node.JS program that read and shows in the console the html code of one external page. The link of the external page should be read from a file `link.txt`

_Hint: You need npm module -> [`request`](https://github.com/request/request)_ 

[link.txt](./link.txt)
[My solution](./exercise3.js)

##4. File list

Write a node.JS program that list the content of the current directory indicating if is a directory or a file

    $ node ex4.js 
    FILE:ex1.js
    FILE:ex2.js
    FILE:ex3.js
    FILE:ex4.js
    FILE:getLinksNode.js
    FILE:link.txt
    DIR :node_modules
    FILE:recursiveContentsDir.js
    FILE:results.txt
    FILE:test.txt

_Hint: You need `fs.readdirSync`, `fs.lstatSync` and `isDirectory()`_

[My solution](./exercise4.js)

## 5. Writing on txt

Write a node.JS program that creates a txt file with the text passed as a parameter

    $ node ex5.js "hey ho! let's go"
    The file was saved!
    $ cat myText.txt 
    hey ho! let's go

_Hint: You need `fs.writeFile`_

### Extra:

Improve the previous exercise to user the first parameter as the name of the destination file

### More Extra:

Improve the previous exercise to also read and shows in the console the content of the file

    $ node ex5.js mySuperText.txt "it's a long way to the top..."
    The file was saved!
    it's a long way to the top...

    $ cat mySuperText.txt 
    it's a long way to the top...

[My solution](./exercise5.js)

## 6. Processing values

Write a node program that process local txt and return values as a Array.

_Hint: You need npm module -> concat-stream_

[My solution](./exercise6.js)

## 7. Parse external webpage (difficult!!)

Write a node program that read the page `https://nodejs.org/api/all.html` and writes in a file (and shows it content after reading it) the **internal links** that contain some text passed as a parameter. 

    $ node getLinksNode.js createServer
    The file was saved!
    https://nodejs.org/api/all.html#http_http_createserver_requestlistener
    https://nodejs.org/api/all.html#https_https_createserver_options_requestlistener
    https://nodejs.org/api/all.html#net_net_createserver_options_connectionlistener
    https://nodejs.org/api/all.html#tls_tls_createserver_options_secureconnectionlistener

    $ node getLinksNode.js readFile
    The file was saved!
    https://nodejs.org/api/all.html#fs_fs_readfile_file_options_callback
    https://nodejs.org/api/all.html#fs_fs_readfilesync_file_options

[My solution](./exercise7.js)

##8. Show Hour
Write a node.JS program that shows you the local hour of server.

_Hint: You need npm module -> strftime_

[My solution](./exercise8.js)

##9. Compare values
Write a node.JS program that search information in .txt file and returns you how much coincidences find.

*If you search about "John", and in your txt files are 2 John, should return 2*

_Hint: **You can try save all data in one array and compare with search..**_

[My solution](./exercise9.js)

##10. Saving
Write a node.JS program that sum all integers saved in other txt file.

[My solution](./exercise10.js)

##11. Creating HTML
Write a node.JS program that create a HTML file.
*Access this HTML with http://localhost:8080 from your browser*

_Hint: You need npm module -> html_

[My solution](./exercise11.js)

##12. Creating HTML II
Write a node.JS program that create a HTML file with a JavaScript function inside that say: "Hello!"
*Access this HTML with http://localhost:8080 from your browser*

_Hint: You need npm module -> html_

[My solution](./exercise12.js)

##13. JSON
Write a node.JS program that read a JSON file and show you some propierties for console.

    JSON FILE:
        {
             "username":"xyz",
             "password":"xyz@123"
             "email":"xyz@xyz.com",
             "id": 0001
        }

Read username, password, email and id,

[My solution](./exercise13.js)

## 14 JSON II - Read JSON From File System
Write a node.JS program that read a JSON object and show the propierties for console

_Hint: 

    var jsonObj = require("./path/to/myjsonfile.json");_

[My solution](./exercise14.js)

## 15 JSON III - Delete An Element From A JSON Object
Write a node.JS program that read a JSON file and delete one propierty.

_Hint:_

    var myJson = {'key':'value'}; delete myJson['key'];_

## 16 JSON IV - Iterate
Write a node.JS program that read a JSON file and show you some propierties for console with itinerate values

_Hint:_

    for(var myKey in myJson) {
       console.log("key:"+myKey+", value:"+myJson[myKey]);
    }

## 17 JSON V - Check Key
Write a node.JS program that read a JSON file and compare if propierties exist in JSON file.

_Hint:_

    if(myJson.hasOwnProperty('key2')){
         //do something if the key exist
    }

## 18 JSON VI - Function
Write a node.JS program that read a JSON file and return the values as a function 

_example:_ 

    function doSomething() { return doSomething.value + 50; }
    var doSomethingElse = function() { return doSomethingElse.value + 100; };
    doSomething.value = 100;
    doSomethingElse.value = 100;
    console.log( doSomething() ); -> 150
    console.log( doSomethingElse() ); -> 200

## 20 JSON VI - Comparing Two JSON **!!!!!!!Final Challenge** 
Write a node.JS program that read two JSON files and compare if propierties are same in both files and show success message when the comparation it's over.

_Hint:_    
        
        if(typeof o1[keyPair[0]] == typeof o2[keyPair[1]] == "object")         {
        return deepEquals(o1[keyPair[0]], o2[keyPair[1]])
        } else {
        return o1[keyPair[0]] == o2[keyPair[1]];


## *CAUTION*, some process like Create HTML or Petitions to servers need close the previous conexion before execute another new.
