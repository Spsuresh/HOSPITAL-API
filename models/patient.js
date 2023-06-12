const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please Provide Patient Name"],
    unique: true,
  },
  reports: [
    {
      status: {
        type: String,
        require: true,
        enum: [
          "Negative",
          "Travelled-Quarantine",
          "Symptoms-Quarantine",
          "Positive-Admin",
        ],
      },
      date: {
        type: Date,
        require: true,
      },
    },
  ],
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
});

const Patient = new mongoose.model("Patient", patientSchema);

module.exports = Patient;
