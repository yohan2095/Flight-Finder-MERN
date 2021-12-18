import axios from 'axios'

const getAllBookings = async () => {
  return axios.get('http://localhost:8000/api/bookings/')
}

const getBooking = async (id) => {
  return axios.get('http://localhost:8000/api/bookings/' + id)
}

const exportedObejct = { getAllBookings, getBooking }

export default exportedObejct