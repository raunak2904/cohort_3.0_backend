const mongoose = require ('mongoose');

let noteSchema = new mongoose.Schema({
    title:{
        trype: String,
        required: true,
    },
    description: {
        type: String,
        minlength: 10
    },
});

const NotesModel = mongoose.model ("notes", noteSchema);
module.exports = NotesModel;