import React, { useEffect, useState } from 'react'
import './AuthBkg.css'
import bkgsrv from '../services/bookingService'
import { useHistory } from 'react-router'

function AuthBkg() {
  const history = useHistory()

  const [bookings, setBookings] = useState({})
  const [auth, setAuth] = useState()

  useEffect(() => {
    async function fetchData() {
      let resp = await bkgsrv.getAllBookings()
      setBookings(resp.data)
    }
    fetchData()
  }, [])

  const findMbkg = () => {
    let counter = 0
    bookings.forEach((bkg) => {
      if (bkg.pnr === auth.bkgcode) {
        sessionStorage.setItem('foundpnr', bkg._id)
        history.push('/mybooking')
      } else {
        counter++
      }
    })

    if (counter === bookings.length) {
      alert('Booking not found')
    }
  }

  return (
    <div className='authbkg'>
      <h1>My booking</h1>
      <label className='authbkg_form'>
        Booking code :{' '}
        <input type='text' onChange={(e) => setAuth({ ...auth, bkgcode: e.target.value })} />{' '}
      </label>{' '}
      <br />
      <button onClick={findMbkg}>Find</button>
    </div>
  )
}

export default AuthBkg
