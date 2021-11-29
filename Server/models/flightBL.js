const flightModel = require('./flightModel');

//GET ALL Flights
const getAllFlights = () =>
{
    return new Promise((resolve,reject) => 
    {
        flightModel.find({}, function(err,data)
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

//GET Flight by ID
const getFlight = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        flightModel.findById(id, function(err,data)
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

//POST a Flight
const createFlight = (obj) =>
{
    return new Promise((resolve,reject) =>
    {
        let mov = new flightModel({
            name : obj.name,
            premiered : obj.premiered,
            genres: obj.genres,
            image : obj.image
        })

        mov.save(function(err)
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

//PUT a Flight
const updateFlight = (id,obj) =>
{
    return new Promise((resolve,reject) =>
    {
        flightModel.findByIdAndUpdate(id,
            {
                name : obj.name,
                premiered : obj.premiered,
                genres: obj.genres,
                image : obj.image
            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Updated')
                }
            })
    })
}

//DELETE a Flight
const deleteFlight = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        flightModel.findByIdAndDelete(id, function(err)
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


module.exports = {getAllFlights, getFlight, createFlight, updateFlight, deleteFlight}