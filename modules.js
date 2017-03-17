const fs = require('fs');
// console.log(module);//All nodejs available modules
//Reuse the functions or variables in other files using module.exports

// module.exports.age = 24;

// module.exports.addNote = () =>{
//   return 'new Note';
// }
var fetchNotes = ()=>{
  try{
    var noteString=fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  }catch(e){
    return [];
  }
};
var saveNotes = (notes) =>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
var addNote = (title,body)=>{
  var notes = fetchNotes();
  var note={
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title===title);
  if(duplicateNotes.length===0){
    notes.push(note);
    saveNotes(notes);
    console.log(`Adding note ${title} and ${body}`);
    return note;
  }
}

var getAll = () =>{
  // console.log(`Showing All notes`);
  return fetchNotes();
}

var removeNote = (title)=>{
  // console.log(`Removed ${title} note`);
  var notes=fetchNotes();
  var filterdNote=notes.filter((note) => note.title!==title);
  saveNotes(filterdNote);
  return notes.length!==filterdNote.length;
}

var readNote = (title)=>{
  var notes=fetchNotes();
  var filterdNote=notes.filter((note) => note.title===title);
  return filterdNote[0];
}

var logNote = (note)=>{
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}
module.exports={
  addNote,//or addNote:addNote
  getAll,
  removeNote,
  readNote,
  logNote
}
