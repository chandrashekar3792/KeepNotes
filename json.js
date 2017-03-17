// var obj={
//   name:'Chandru'
// };
//
// var stringObj=JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// var personString ='{"name":"chandru","age":25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

var fs = require('fs');

var originalNote ={
  title:'Some title',
  body:'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('note.json',originalNoteString);

var noteString = fs.readFileSync('note.json');

connsole.log(note.title);
