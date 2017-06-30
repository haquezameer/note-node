const fs = require('fs');
const yargs = require('yargs');

const argv= yargs.argv;
const command = argv._[0];

console.log(argv);

const title = argv.title;
const body = argv.body;

const getNotes = () =>{
  try{
    return JSON.parse(fs.readFileSync("mynotes.json","utf8"));
  }catch(e){
    return [];
  }
}

const saveNotes = (note) =>{
  fs.writeFileSync("mynotes.json",JSON.stringify(notes));
}


var note = {
  title,
  body
};

if(command === "add"){
  var notes = getNotes();
  notes.push(note);
  saveNotes(note);
}
