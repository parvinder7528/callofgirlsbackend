const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true }
});

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});

const placeSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
  }
}, { timestamps: true });


const City = mongoose.model('City', CitySchema);
const Category = mongoose.model('Category', CategorySchema);
const Service = mongoose.model('Service', ServiceSchema);
const place = mongoose.model("Place", placeSchema);

module.exports = { City, Category, Service ,place};