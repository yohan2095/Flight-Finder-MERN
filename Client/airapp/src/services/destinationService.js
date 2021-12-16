import axios from 'axios'

const getAllDestinations = async () => {
  return axios.get('http://localhost:8000/api/destinations/')
}

const getDestination = async (id) => {
  return axios.get('http://localhost:8000/api/destinations/' + id)
}

const exportedObejct = { getAllDestinations, getDestination }

export default exportedObejct
