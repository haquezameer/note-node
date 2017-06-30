const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs
.command('add','Add a note')
.help()
.argv;
const command = argv._[0];
const title = argv.title;
const body = argv.body;


if(command === "add"){
  console.log("adding note");
 var result = notes.addNote(title,body);
 if(result)
    console.log("note added");
  else
    console.log("note exist");
}

else if(command === "list"){
  console.log("Listing notes");
  var result = notes.getNotes();
  if(result.length){
  result.map((note) => {
    console.log('---');
    console.log(note.title);
    console.log(note.body);
    });
  }
  else{
    console.log("No notes");
  }
}

else if(command === "read"){
  var allNotes = notes.getNotes();
  var result = notes.noteExist(title,allNotes);
  if(result.length)
  {
    console.log(result[0].title);
    console.log(result[0].body);
  }
  else {
    console.log('No such notes');
  }
}

else if(command === "remove"){
    notes.removeNote(title);
    console.log("Note removed");
}

else{
  console.log("Command invalid");
}
