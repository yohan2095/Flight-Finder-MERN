const mongoose = require('mongoose')

let DestinationSchema = new mongoose.Schema({
    IATA : String,
    country : String,
    city : String,
    duration : String,
    price : Number
})

module.exports = mongoose.model('destinations', DestinationSchema)