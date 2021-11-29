const destinationModel = require('./destinationModel');

//GET ALL destinations
const getAllDestinations = () =>
{
    return new Promise((resolve,reject) => 
    {
        destinationModel.find({}, function(err,data)
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

//GET Destination by ID
const getDestination = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        destinationModel.findById(id, function(err,data)
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

//POST a Destination
const createDestination = (obj) =>
{
    return new Promise((resolve,reject) =>
    {
        let mov = new destinationModel({
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

//PUT a Destination
const updateDestination = (id,obj) =>
{
    return new Promise((resolve,reject) =>
    {
        destinationModel.findByIdAndUpdate(id,
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

//DELETE a destination
const deleteDestination = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        destinationModel.findByIdAndDelete(id, function(err)
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


module.exports = {getAllDestinations, getDestination, createDestination, updateDestination, deleteDestination}