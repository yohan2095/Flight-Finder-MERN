import axios from 'axios';

const getAllDestinations = async () =>
{
    return axios.get("http://localhost:8000/api/destinations/")
}

const getDestination = async (id) =>
{
    return axios.get("http://localhost:8000/api/destinations/" + id)
}

export default {getAllDestinations, getDestination}