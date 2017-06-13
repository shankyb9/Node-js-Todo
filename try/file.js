var fs = require('fs');

// var readMe = fs.readFileSync('./try/readme.txt','utf8'); // if only 'readme.txt' ...not working as path is relative to node
// //console.log(readMe);
//
// fs.writeFileSync('./try/writeme.txt',readMe);

fs.readFile('./try/readme.txt','utf8',function(err,data){
  fs.writeFile('./try/writeme.txt',data,function(err){
    if(err)
      console.log(err);
  });
});

// fs.unlink('writeme.txt'); // to delete file
