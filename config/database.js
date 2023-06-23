const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://spsuri777:Spsuresh97@cluster0.brnqjxb.mongodb.net/");

const db = mongoose.connection;

db.error(
    "error",
    console.error.bind(console,"error in connecting with mongodb")
);

db.once("open", () =>{
    console.log("succesfully connecting to mongodb");
});

module.exports = db;