const fs = require('fs');
const os = require('os');

//Adding otherfiles
const note = require('./modules');

//Adding 3rd party libraries
const _=require('lodash');
const yargs=require('yargs');
// const user = os.userInfo();
// Get user details
//console.log(user);
// ES6 Templates string with `` and ${variable}
// fs.appendFile('greetings.txt',`Hello ${user.username}! and my age is ${note.age}`,function(err){
//   if(err){
//     console.log('Unable to write to file');
//   }
// });
// note.addNote((err,res)=>{
//   if(!err){
//     console.log('something wrong');
//   }else{
//     console.log(res);//Notes module
//   }
// });

//  console.log(note.add(9,-2));
// console.log(_.isString(true));
// console.log(_.isString('Chandru'));
//
// var filteredArray=_.uniq(['Chandru',1,'Chandru',1,2,3,4]);
// console.log(filteredArray);
const argv = yargs.argv;
// console.log(',process.argvprocess.argv',process.argv);
var command = argv._[0];
// console.log('command',command);
console.log('Yargs',argv);
if(command==='add'){
  note.addNote(argv.title,argv.body);
}else if(command==='list'){
    // console.log('Listing all the notes');
    note.getAll();
}else if(command==='read'){
    // console.log('Showing single note');
    note.readNote(argv.title);
}else if(command==='remove'){
    // console.log('removing note');
    note.removeNote(argv.title);
}else{
  console.log('command not found');
}