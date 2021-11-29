const flightBL = require('../models/flightBL')
const express = require('express')

const router = express.Router();

//GET ALL flights
router.route('/').get(async function(req,resp)
{
    let data = await flightBL.getAllFlights();
    return resp.json(data)
})

//GET flight by ID
router.route('/:id').get(async function(req,resp)
{
    let data = await flightBL.getFlight(req.params.id);
    return resp.json(data)
})

//Post a flight
router.route('/').post(async function(req,resp)
{
    let status = await flightBL.createFlight(req.body);
    return resp.json(status)
})

//PUT a flight
router.route('/:id').put(async function(req,resp)
{
    let status = await flightBL.updateFlight(req.params.id, req.body);
    return resp.json(status)
})

//DELETE a flight
router.route('/:id').delete(async function(req,resp)
{
    let status = await flightBL.deleteFlight(req.params.id);
    return resp.json(status)
})


module.exports = router;