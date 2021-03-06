import React, { useEffect, useState } from 'react'
import '../oneway/Checkout.css'
import flsrv from '../../../services/flightService'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import FlightLand from '@mui/icons-material/FlightLand'
import DateRange from '@mui/icons-material/DateRange'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import PaymentIcon from '@mui/icons-material/Payment'
import axios from 'axios'
import { useHistory } from 'react-router'

function CheckoutRT() {
  const history = useHistory()

  const [flight, setFlight] = useState({})
  const [flight2, setFlight2] = useState({})
  const [booking2, setBooking2] = useState({
    pax: '',
    price: '',
    pnr: '',
    sflights: []
  })

  const pax = sessionStorage.getItem('pax')
  const flightID = sessionStorage.getItem('selectedF')
  const flightID2 = sessionStorage.getItem('selectedF2')
  const flightP = sessionStorage.getItem('selectedP')
  const flightP2 = sessionStorage.getItem('selectedP2')
  const totalPrice = parseInt(flightP) + parseInt(flightP2)

  useEffect(() => {
    async function fetchData() {
      let resp = await flsrv.getFlight(flightID)
      setFlight(resp.data)

      let resp2 = await flsrv.getFlight(flightID2)
      setFlight2(resp2.data)
    }
    fetchData()
    pay()

    return () => {
      setBooking2({})
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pay = async () => {
    /* Set data into booking */

    setBooking2({
      pax: pax,
      price: totalPrice,
      pnr: sessionStorage.getItem('bookingCode'),
      sflights: [flightID, flightID2]
    })
  }

  const save = async () => {
    let status = await axios.post('https://airyhn.herokuapp.com/bookings/', booking2)

    history.push('/receipt')
  }

  return (
    <div className='checkout'>
      <h2 className='checkout_header'>
        <span>05. </span>Confirm your booking
      </h2>
      <span className='checkout_passenger'>
        <PersonOutlineIcon className='checkout_passengerIcon' /> <label>{pax}</label>
      </span>
      <div className='checkout_ongoing'>
        <h2>Ongoing Flight</h2>
        <span className='checkout_fnum'>{flight.fnum}</span>
        <br />
        <span className='checkout_fromto'>
          <FlightTakeoffIcon className='checkout_fromtoIcon' /> {flight.from}{' '}
          <FlightLand className='checkout_fromtoIcon' /> {flight.to}
        </span>{' '}
        <br />
        <span className='checkout_deparr'>
          <DateRange className='checkout_deparrIcon' /> Departure : {flight.depT} Arrival :{' '}
          {flight.arrT}
        </span>
        <br />
        <span className='checkout_duration'>
          <AccessTimeIcon className='checkout_deparrIcon' /> {flight.duration} hours
        </span>
      </div>
      <br /> <br />
      <div className='checkout_ongoing'>
        <h2>Outgoing Flight</h2>
        <span className='checkout_fnum'>{flight2.fnum}</span>
        <br />
        <span className='checkout_fromto'>
          <FlightTakeoffIcon className='checkout_fromtoIcon' /> {flight2.from}{' '}
          <FlightLand className='checkout_fromtoIcon' /> {flight2.to}
        </span>{' '}
        <br />
        <span className='checkout_deparr'>
          <DateRange className='checkout_deparrIcon' /> Departure : {flight2.depT} Arrival :{' '}
          {flight2.arrT}
        </span>
        <br />
        <span className='checkout_duration'>
          <AccessTimeIcon className='checkout_deparrIcon' /> {flight2.duration} hours
        </span>
      </div>
      <br />
      <span className='checkout_price'>
        Total price : <label>{totalPrice}.00$</label>
      </span>{' '}
      <br />
      <button className='checkout_valid' onClick={save}>
        <PaymentIcon className='checkout_validIcon' /> Pay
      </button>{' '}
      <br />
      <span className='checkout_info'>
        *It's not a real payment. It will lead to your free booking confirmation.
      </span>
    </div>
  )
}

export default CheckoutRT
