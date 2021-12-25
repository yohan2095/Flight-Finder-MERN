import axios from 'axios'

const getAllBookings = async () => {
  return axios.get('https://airyhn.herokuapp.com/bookings/')
}

const getBooking = async (id) => {
  return axios.get('https://airyhn.herokuapp.com/bookings/' + id)
}

const exportedObejct = { getAllBookings, getBooking }

export default exportedObejct