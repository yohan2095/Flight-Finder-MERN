const bookingModel = require('./bookingModel')

//GET ALL Bookings
const getAllBookings = () => {
  return new Promise((resolve, reject) => {
    bookingModel.find({}, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

//GET Booking by ID
const getBooking = (id) => {
  return new Promise((resolve, reject) => {
    bookingModel.findById(id, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

//POST a Booking
const createBooking = (obj) => {
  return new Promise((resolve, reject) => {
    let bkg = new bookingModel({
      pax: obj.pax,
      price: obj.price,
      pnr: obj.pnr,
      sflights: obj.sflights,
    })

    bkg.save(function (err) {
      if (err) {
        reject(err)
      } else {
        resolve('Created')
      }
    })
  })
}


//DELETE a booking
const deleteBooking = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        bookingModel.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('Deleted')
            }
        })
    })
}

module.exports = { getAllBookings, getBooking, createBooking, deleteBooking }
