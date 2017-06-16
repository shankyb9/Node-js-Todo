var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//Connect to mlab's database
//mongoose.connect("mongodb://test:test@ds127802.mlab.com:27802/cdss"); timeout was occuring
mongoose.connect("mongodb://localhost/testaroo");


//Create a schema - blueprint for data
var todoSchema = new mongoose.Schema({
  item: String
});

//Create a model
var Todo = mongoose.model('Todo',todoSchema);

//var data= [{item: 'Get Milk'},{item: 'Walk dog'},{item:'Finf something new'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

  app.get('/todo',function(req, res){
    //get data from mongodb and pass it to view
//  res.render('todo',{todos: data});
  Todo.find({},function(err, data){
    if(err) throw err;
    res.render('todo',{todos: data });
  });

  });

  app.post('/todo', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
//get data from the view and add it to mongodb
  var newTodo = Todo(req.body).save(function(err, data){
    res.json(data);
  });
    //data.push(req.body);
    //res.json(data);
  });

  app.delete('/todo/:item',function(req, res){
    //delete the requested item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err,data){
      if(err) throw err;
      res.json(data);
    });
        //  data = data.filter(function(todo){
        //    return todo.item.replace(/ /g,'-') !== req.params.item;
        //  }); //if false, deletes that item
        //  res.json(data);
  });


}
