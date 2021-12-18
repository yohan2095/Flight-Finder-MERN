const mongoose = require('mongoose')

let BookingSchema = new mongoose.Schema({
    fnum : String,
    fnum2 : String,
    from : String,
    from2 : String,
    to : String,
    to2 : String,
    duration : String,
    duration2 : String,
    depT : String,
    depT2 : String,
    arrT : String,
    arrT2 : String,
    pnr : String,
    price : Number,
    pax : String
})

module.exports = mongoose.model('bookings', BookingSchema)