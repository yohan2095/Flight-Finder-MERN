import React, { useEffect, useState } from 'react'
import bkgsrv from '../../services/bookingService'
import Myflight from './Myflight'
import './Mybooking.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

function Mybooking() {
  const [mybkg, setMybkg] = useState({})

  const bkgid = sessionStorage.getItem('foundpnr')
  console.log(mybkg)
  useEffect(() => {
    async function fetchData() {
      let resp = await bkgsrv.getBooking(bkgid)
      setMybkg(resp.data)
    }
    fetchData()
  }, [mybkg, bkgid])
  return (
    <div>
      <h1>My booking</h1> <br/>

      {/* Booking code */}
      <label className='mybooking_pnr'>
        <span>{mybkg.pnr}</span>
      </label> <br/>

      <br />
      {/* Passenger name */}
      <label className='mybooking_pax'>
        <PersonOutlineIcon className='mybooking_paxIcon' />
        <span>{mybkg.pax}</span>
      </label>

      <br />
      {/* Flights on this booking */}
      <div>
        {(mybkg.sflights ?? []).map((item) => {
          return <Myflight myfid={item} key={item} />
        })}
      </div>
      {/* Price */}
      <label className='mybooking_price'>Price: <span>{mybkg.price}.00$</span></label>
    </div>
  )
}

export default Mybooking
