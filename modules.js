
// console.log(module);//All nodejs available modules
//Reuse the functions or variables in other files using module.exports

// module.exports.age = 24;

// module.exports.addNote = () =>{
//   return 'new Note';
// }
var addNote = (title,body)=>{
  console.log(`Adding note ${title} and ${body}`);
}

var getAll = () =>{
  console.log(`Showing All notes`);
}

var removeNote = (title)=>{
  console.log(`Removed ${title} note`);
}

var readNote = (title)=>{
  console.log(`The body of the note is${title}`);
}

module.exports={
  addNote,//or addNote:addNote
  getAll,
  removeNote,
  readNote
}
