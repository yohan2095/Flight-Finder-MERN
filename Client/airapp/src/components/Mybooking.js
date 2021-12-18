import React, { useEffect, useState } from 'react'
import bkgsrv from '../services/bookingService'

function Mybooking() {
  const [mybkg, setMybkg] = useState({})

  useEffect(() => {
    async function fetchData() {
      let resp = await bkgsrv.getBooking(sessionStorage.getItem('foundpnr'))
      setMybkg(resp.data)
    }
    fetchData()
    console.log(mybkg)
  }, [])
  return (
    <div>
      <h1>My booking</h1>

      <span>{mybkg.pax}</span>
    </div>
  )
}

export default Mybooking
