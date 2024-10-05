const mongoose = require('mongoose');

const carPartSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: String, required: true },
  partName: { type: String, required: true },
  condition: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: Boolean, required: true },
});

const CarPart = mongoose.model('CarPart', carPartSchema);
module.exports = CarPart;
