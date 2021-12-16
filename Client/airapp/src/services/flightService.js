import axios from 'axios'

const getAllFlights = async () => {
  return axios.get('http://localhost:8000/api/flights/')
}

const getFlight = async (id) => {
  return axios.get('http://localhost:8000/api/flights/' + id)
}

const exportedObejct = { getAllFlights, getFlight }

export default exportedObejct
