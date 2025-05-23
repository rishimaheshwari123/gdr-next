const mongoose = require('mongoose');

const farmhouseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
});

module.exports = mongoose.model('Farmhouse', farmhouseSchema);
