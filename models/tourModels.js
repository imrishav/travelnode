const mongoose = require('mongoose');

const toursSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  duration: {
    type: Number,
    required: [true, 'A Tour must have a duration.']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A Tour must have a group Size']
  },
  difficulty: {
    type: String,
    required: [true, 'A Tour Must have a difficulty']
  },
  ratingAverage: {
    type: Number,
    default: 4.5
  },
  ratingQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'A tour must have price']
  },
  priceDiscount: Number,
  summary: {
    type: String,
    required: [true, 'Must have summary'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  imageCover: {
    type: String,
    required: [true, 'A Tour must have a cover Image...']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  startDate: [Date]
});

const Tour = mongoose.model('Tour', toursSchema);

module.exports = Tour;
