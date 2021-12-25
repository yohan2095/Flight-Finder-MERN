import axios from 'axios'

const getAllFlights = async () => {
  return axios.get('https://airyhn.herokuapp.com/flights/')
}

const getFlight = async (id) => {
  return axios.get('https://airyhn.herokuapp.com/flights/' + id)
}

const exportedObejct = { getAllFlights, getFlight }

export default exportedObejct
