const fs = require('fs');

const removeNote = (title) =>{
  const allnotes = getNotes();
  const newnotes = allnotes.filter((note) => note.title !== title );
  saveNotes(newnotes);
}

const noteExist = (title,notes) => {
  var duplicate = notes.filter((note) => note.title === title);
  if(duplicate.length>0)
    return duplicate;
  return false;
}



const getNotes = () =>{
  try{
    return JSON.parse(fs.readFileSync("mynotes.json","utf8"));
  }catch(e){
    return [];
  }
}

const saveNotes = (notes) =>{
  fs.writeFileSync("mynotes.json",JSON.stringify(notes));
}


const addNote = (title,body) => {
  var notes = getNotes();
  if(noteExist(title,notes))
    return false;
  var note = {
    title,
    body
  };
  notes.push(note);
  saveNotes(notes);
  return true;
}

module.exports = {
  addNote,
  getNotes,
  noteExist,
  removeNote
};
