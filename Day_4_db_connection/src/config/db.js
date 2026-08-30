const {default: mongoose} = require("mongoose");
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
module.exports = connectDb;