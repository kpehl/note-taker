// Dependencies
// File server for writing to files
const fs = require('fs');
// Path for working with file and directory paths
const path = require('path')


// Functions for notesRoutes.js

// A function to post a note
function postNote(body, noteArray) {
    // set the note data to the input text
    const note = body;
    // add the note to the array
    noteArray.push(note);
    // write to the json file, without editing data, with whitespace
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify({ noteArray }, null, 2)
    )
    // return the note to the post route
    return note;
}

// A function to validate a note
function validateNote(note) {
    if(!note.title || typeof note.title !== 'string') {
        return false;
    }
    if(!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

// Export the functions for use in notesRoutes.js
module.exports = {
    postNote,
    validateNote
  };