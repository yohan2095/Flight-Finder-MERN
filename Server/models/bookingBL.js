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
            fnum2 : obj.fnum2,
            depT : obj.depT,
            depT2 : obj.depT2,
            arrT : obj.arrT,
            arrT2 : obj.arrT2,
            from : obj.from,
            from2 : obj.from2,
            to : obj.to,
            to2 : obj.to2,
            pax : obj.pax,
            price : obj.price,
            duration : obj.duration,
            duration2 : obj.duration2,
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