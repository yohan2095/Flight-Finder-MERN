const mongoose = require('mongoose')

let FlightSchema = new mongoose.Schema({
    fnum : String,
    date : Date,
    from : String,
    to : String,
    duration : String,
    depT : String,
    arrT : String,
    Y : Number,
    W : Number,
    C : Number
})

module.exports = mongoose.model('flights', FlightSchema)