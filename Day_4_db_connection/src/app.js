const express = require('express');
const connnectdb = require("./config/db");

const app = express();

connnectdb();

app.get('/', (req, res) => {
    res.send('done');
});

module.exports = app;