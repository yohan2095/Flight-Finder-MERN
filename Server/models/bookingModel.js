const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
  sflights: [String],
  pnr: String,
  price: Number,
  pax: String,
})

module.exports = mongoose.model('bookings', BookingSchema)
