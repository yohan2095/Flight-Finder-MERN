const bookingBL = require('../models/bookingBL')
const express = require('express')

const router = express.Router();

//GET ALL Bookings
router.route('/').get(async function(req,resp)
{
    let data = await bookingBL.getAllBookings();
    return resp.json(data)
})

//GET booking by ID
router.route('/:id').get(async function(req,resp)
{
    let data = await bookingBL.getBooking(req.params.id);
    return resp.json(data)
})

//Post a Booking
router.route('/').post(async function(req,resp)
{
    let status = await bookingBL.createBooking(req.body);
    return resp.json(status)
})

module.exports = router;