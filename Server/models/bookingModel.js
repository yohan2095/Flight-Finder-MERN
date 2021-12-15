const mongoose = require('mongoose')

let BookingSchema = new mongoose.Schema({
    fnum : String,
    date : Date,
    from : String,
    to : String,
    duration : String,
    depT : String,
    arrT : String,
    pnr : String,
    price : Number,
    pax : String
})

module.exports = mongoose.model('bookings', BookingSchema)