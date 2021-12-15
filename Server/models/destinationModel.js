const mongoose = require('mongoose')

let DestinationSchema = new mongoose.Schema({
    IATA : String,
    country : String,
    city : String,
    imgUrl : String
})

module.exports = mongoose.model('destinations', DestinationSchema)