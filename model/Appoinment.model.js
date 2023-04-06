const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  name: String,
  image: String,
  specialization: String,
  experience: Number,
  location: String,
  date: String,
  slots: Number,
  fee: Number,
});

const appoinmentModel = mongoose.model("user", appointmentSchema);

module.exports = appoinmentModel;
