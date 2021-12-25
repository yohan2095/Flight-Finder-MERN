import React, { useState } from 'react'
import { useHistory } from 'react-router'
import '../oneway/Passenger.css'

function PasengerRT() {
  const history = useHistory()

  const [passenger, setPassenger] = useState({ fname: '', lname: '' })

  const setPax = () => {
    const paxN = passenger.fname + ' ' + passenger.lname
    sessionStorage.setItem('pax', paxN)
    gnrtBkg()
    history.push('/checkoutrt')
  }

  const gnrtBkg = async () => {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'
    var charactersLength = characters.length
    for (var i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    const Gpnr = result
    sessionStorage.setItem('bookingCode', Gpnr)
  }

  return (
    <div className='passenger'>
      <h2 className='passenger_header'>
        <span>4. </span>Fill your details
      </h2>
      <label>First Name :</label>{' '}
      <input
        type='text'
        onChange={(e) => setPassenger({ ...passenger, fname: e.target.value })}
      ></input>
      <label>Last Name :</label>{' '}
      <input
        type='text'
        onChange={(e) => setPassenger({ ...passenger, lname: e.target.value })}
      ></input>{' '}
      <br />
      <input className='oneway_find' type='button' value='Next' onClick={() => setPax()}></input>
    </div>
  )
}

export default PasengerRT
