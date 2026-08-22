const express = require('express');
const mongoose = require('mongoose');
const app = express();

const connectDb = async () => {
    try{
        await mongoose.connect(
        "mongodb+srv://raunak2904_db_user:cohort12345@cluster0.jt8lhvr.mongodb.net/"
    );
    console.log("mongodb connected");
    } catch(error){
        console.log("error while connecting db", error );
    }
};

connectDb();

app.get('/', (req, res) => {
    res.send('done');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});