// models/Quote.js

const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  text: String,
  date: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Quote', quoteSchema);
