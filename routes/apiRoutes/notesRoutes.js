// Dependencies
const router = require('express').Router();
const { postNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

// Routes used for the Notes API

// A route for requesting notes data
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// A route for posting a new note
router.post('/notes', (req, res) => {
    // set the id for the new note based on what the next index of the array will be
    req.body.id = notes.length.toString();
    // validate the new animal data, and if anything in the req.body is incorrect, send back a 400 error "Bad Request"
    if(!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        // add note to json file and animals array with createNewAnimal()
        const note = postNote(req.body, notes);
        // send the response (new animal) in json format back to the client
        res.json(note);
    }
});

// Export the router - making sure there is only one server instance as instantiated in server.js
module.exports = router;