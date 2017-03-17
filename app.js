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
const titleOptions={
  describe:'Title of the note',
  demand:true,
  alias:'t'
};
const boyOptions={
    describe:'Body of the note',
    demand:true,
    alias:'b'
};
const argv = yargs
            .command('add','Add a new note',{
              title:titleOptions,
              body:boyOptions
            })
            .command('remove','Remove a  note',{
              title:titleOptions
            })
            .command('read','Read a particular a  note',{
              title:titleOptions
            })
            .command('list','List all  note')
            .help()
            .argv;
// console.log(',process.argvprocess.argv',process.argv);
var command = argv._[0];
// console.log('command',command);
console.log('Yargs',argv);
if(command==='add'){
    var addNote= note.addNote(argv.title,argv.body);
    if(addNote){
      console.log('Note created');
      note.logNote(addNote);
    }else{
      console.log('Already same title is exists');
    }

}else if(command==='list'){
    // console.log('Listing all the notes');
  var allNote=note.getAll();
  if(allNote){
    console.log(`Printing ${allNote.length} note(s).`);
    allNote.forEach((notes) => note.logNote(notes));
  }else{
    console.log('No Notes');
  }
}else if(command==='read'){
    // console.log('Showing single note');
  var readNote= note.readNote(argv.title);
  if(readNote){
    note.logNote(readNote);
  }else{
    console.log(`Title:${argv.title} not found in notes`);
  }
}else if(command==='remove'){
    // console.log('removing note');
    var noteRemoved=note.removeNote(argv.title);
    var message=noteRemoved ? 'Note was removed':'Note not found';
    console.log(message);
}else{
  console.log('command not found');
}
