import { useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './Ftype.css'
import dstsrv from '../../services/destinationService'
import Destcard from '../mainpage/Destcard'

function Ftype() {
  const [destinations, setDestinations] = useState([])
  // Fetch all the destinations data and puts it inside destinations Hook State
  useEffect(() => {
    async function fetchData() {
      let resp = await dstsrv.getAllDestinations()
      setDestinations(resp.data)
    }
    fetchData()
  }, [])

  const history = useHistory()

  const gotoOW = () => {
    history.push('/oneway')
  }

  const gotoRT = () => {
    history.push('/roundtrip')
  }

  const gotoMbkg = () => {
    history.push('/authbkg')
  }
  
  return (
    <div className='ftype'>
      <h2 className='ftype_header'>
        <span>1.</span> Select an Option
      </h2>

      <button className='ftype_button' onClick={gotoOW}>
        One Way
      </button>
      <button className='ftype_button' onClick={gotoRT}>
        RoundTrip
      </button>

      <br />
      <br />
      <br />

      <h2>Our Destinations :</h2>

      {/* Return Destcard Comp with destid as props */}
      <div>
        {destinations.map((item) => {
          return <Destcard destid={item._id} key={item._id} />
        })}
      </div>

      <button onClick={gotoMbkg} className='ftype_myReservation'> 
        My Booking
      </button>
    </div>
  )
}

export default Ftype
