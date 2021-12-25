import axios from 'axios'

const getAllDestinations = async () => {
  return axios.get('https://airyhn.herokuapp.com/destinations/')
}

const getDestination = async (id) => {
  return axios.get('https://airyhn.herokuapp.com/destinations/' + id)
}

const exportedObejct = { getAllDestinations, getDestination }

export default exportedObejct
