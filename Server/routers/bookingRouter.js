const bookingBL = require('../models/bookingBL')
const express = require('express')

const router = express.Router();

//GET booking by ID
router.route('/:id').get(async function(req,resp)
{
    let data = await bookingBL.getBooking(req.pnr);
    return resp.json(data)
})

//Post a Booking
router.route('/').post(async function(req,resp)
{
    let status = await bookingBL.createBooking(req.body);
    return resp.json(status)
})

module.exports = router;