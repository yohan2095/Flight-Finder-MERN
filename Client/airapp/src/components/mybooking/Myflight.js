import React, { useEffect, useState } from 'react'
import flsrv from '../../services/flightService'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import FlightLand from '@mui/icons-material/FlightLand'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import DateRange from '@mui/icons-material/DateRange'
import './Myflight.css'

function Myflight(props) {
  const [flight, setFlight] = useState({})

  useEffect(() => {
    async function fetchData() {
      let resp = await flsrv.getFlight(props.myfid)
      setFlight(resp.data)
    }
    fetchData()
  }, [props.myfid])

  return (
    <div className='myflight'>
      {/* Flight number */}
      <label className='myflight_fnum'>{flight.fnum}</label> <br />

      {/* Departure and Arrival */}
      <span className='checkout_fromto'>
        <FlightTakeoffIcon className='checkout_fromtoIcon' /> {flight.from}{' '}
        <FlightLand className='checkout_fromtoIcon' /> {flight.to}
      </span>{' '} <br/>

      {/* Departure and Arrival time + Duration of the flight */}
      <span className='checkout_deparr'>
        <DateRange className='checkout_deparrIcon' /> Departure : {flight.depT} Arrival :{' '}
        {flight.arrT}
      </span>
      <br />
      <span className='checkout_duration'>
        <AccessTimeIcon className='checkout_deparrIcon' /> {flight.duration} hours
      </span>
    </div>
  )
}

export default Myflight
