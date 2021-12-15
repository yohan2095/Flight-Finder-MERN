const bookingModel = require('./bookingModel');

//GET booking by PNR
const getBooking = (id) =>
{
    return new Promise((resolve,reject) => 
    {
        bookingModel.findById(id, function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

//POST a Booking
const createBooking = (obj) =>
{
    return new Promise((resolve,reject) =>
    {
        let bkg = new bookingModel({
            fnum : obj.fnum,
            depT : obj.depT,
            arrT : obj.arrT,
            from : obj.from,
            to : obj.to,
            pax : obj.pax,
            price : obj.price,
            duration : obj.duration,
            pnr : obj.pnr,
        })

        bkg.save(function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('Created')
            }
        })
    })
}

module.exports = {getBooking , createBooking}