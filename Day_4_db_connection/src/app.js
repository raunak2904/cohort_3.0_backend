const express = require('express');
const connnectdb = require("./config/db");
const NotesModel = require('./models/note.model');

const app = express();

connnectdb();

app.get('/', (req, res) => {
    res.send('done');
});

app.post('/create', async(req, res) => {
    let { title, description } = req.body;

    const newNote = await NotesModel.create({
        title,
        descriotion,
    });

    res.send({
        success: true,
        message: "Notes created successfully",
        data: newNote,
    });
});

module.exports = app;