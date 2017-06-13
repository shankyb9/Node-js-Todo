// `` : backtick : used by template string : new addition to ES6
var events = require('events');

//var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',function(mssg){
//   console.log(mssg);
// });
//
// myEmitter.emit('someEvent','Event Emitted');

var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var ryu = new Person('Ryu');
var people = [james,mary,ryu];

people.forEach(elem => {
  elem.on('speak',function(msg){
    console.log(elem.name + ' said:',msg);
  });
});

james.emit('speak','Hey bro');
