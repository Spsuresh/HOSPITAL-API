const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please Enter Your Name"],
  },
  // gmail:{
  //     type:String,
  //     require: [true, "Please Enter Your Gmail"],
  // },
  password: {
    type: String,
    require: [true, "Please Enter Your Password"],
    minLength: [6, "Password should be greater than 6 characters"],
  },
});

const Doctor = new mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
