const mongoose = require("mongoose");

require('dotenv').config()

const connection = mongoose.connect("mongodb+srv://ganesh:ganesh@cluster0.6d4ur0f.mongodb.net/mock?retryWrites=true&w=majority")

module.exports = connection