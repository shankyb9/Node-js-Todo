var http= require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');  //inherits event Listener
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
// myReadStream.on('data',function(chunk){
//   console.log('new chunk received');
//   //console.log(chunk);
//   myWriteStream.write(chunk);
// });

// myReadStream.pipe(myWriteStream);

// var server = http.createServer(function(req,res){
//   console.log('request was made:',req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hey buddy');
// });
//
// server.listen(3000,'127.0.0.1');
// console.log('Yo, listening!');

// var server = http.createServer(function(req,res){
//   console.log('request was made:',req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
//   myReadStream.pipe(res); });
// var server = http.createServer(function(req,res){
//   console.log('request was made:',req.url);
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
//   myReadStream.pipe(res);
//
//   //res.end('Hey buddy');
// });

// var server = http.createServer(function(req,res){
//   console.log('request was made:',req.url);
//   res.writeHead(200, {'Content-Type': 'application/json'});
//   var myObj = {
//     name:'Shank',
//     job: 'Software Engineer',
//     age: 22
//   };
//   res.end(JSON.stringify(myObj));
// });


var server = http.createServer(function(req,res){
  console.log('request was made:',req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8').pipe(res);
  } else if( req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/contact.html','utf8').pipe(res);
  } else if( req.url === '/api'){
    var myObj = [{name : 'Rihan', age : 30},{name:'Shank', age: 21}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(myObj));
  }
  else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/404.html','utf8').pipe(res);

  }

});

server.listen(3000,'127.0.0.1');
console.log('Yo, listening!');
