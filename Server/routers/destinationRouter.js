const destinationBL = require('../models/destinationBL')
const express = require('express')

const router = express.Router();

//GET ALL Destinations
router.route('/').get(async function(req,resp)
{
    let data = await destinationBL.getAllDestinations();
    return resp.json(data)
})

//GET Destination by ID
router.route('/:id').get(async function(req,resp)
{
    let data = await destinationBL.getDestination(req.params.id);
    return resp.json(data)
})

//Post a Destination
router.route('/').post(async function(req,resp)
{
    let status = await destinationBL.createDestination(req.body);
    return resp.json(status)
})

//PUT a Destination
router.route('/:id').put(async function(req,resp)
{
    let status = await destinationBL.updateDestination(req.params.id, req.body);
    return resp.json(status)
})

//DELETE a Destination
router.route('/:id').delete(async function(req,resp)
{
    let status = await destinationBL.deleteDestination(req.params.id);
    return resp.json(status)
})


module.exports = router;