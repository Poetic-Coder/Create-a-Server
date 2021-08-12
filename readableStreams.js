// Readable Streams
var http = require('http');
var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/read.md', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writesream.md');




//TO USE PIPE
myReadStream.pipe(myWriteStream);



// myReadStream.on('data', function(chunk){
//     console.log("New chunk receieved:");
//     myWriteStream.write(chunk);
// }); ===== Using the writestream


























// var http = require('http');
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/read.md', 'utf8');

// myReadStream.on('data', function(chunk){
//     console.log('new chunk received:');
//     console.log(chunk);
// });















