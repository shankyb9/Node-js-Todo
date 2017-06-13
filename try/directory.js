var fs = require('fs');

fs.mkdirSync('stuff');
fs.rmdirSync('stuff');

fs.mkdir('./try/stuff',function(){
  fs.readFile('./try/readme.txt','utf8',function(err, data){
    fs.writeFile('./try/stuff/writeme.txt',data,function(err){
      if(err)
        console.log(err);
      });
  });
});
//
// fs.unlink('./try/stuff/writeme.txt',function(err){
//   if(!err)
//    {
//      fs.rmdir('./try/stuff',function(err){
//      if(err)
//       console.log(err);
//      });
//     }
// });
