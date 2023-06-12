const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017");

const db = mongoose.connection;

db.error(
    "error",
    console.error.bind(console,"error in connecting with mongodb")
);

db.once("open", () =>{
    console.log("succesfully connecting to mongodb");
});

module.exports = db;