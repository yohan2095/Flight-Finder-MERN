import { useEffect, useState } from 'react'
import dstsrv from '../services/destinationService'
import { Col, Row } from 'react-grid-system'
import './Roundtrip.css'
import { useHistory } from 'react-router-dom'

function Roundtrip() {
  const [destinations, setDestinations] = useState([])
  const [deparr, setDeparr] = useState({ departure: 'TLV', arrival: 'TLV' })

  useEffect(() => {
    async function fetchData() {
      let resp = await dstsrv.getAllDestinations()
      setDestinations(resp.data)
    }
    fetchData()
  }, [])

  const find = () => {
    sessionStorage.setItem('Dep', deparr.departure)
    sessionStorage.setItem('Arr', deparr.arrival)
    history.push('/flightsrt')
  }

  const history = useHistory()

  return (
    <div className='roundtrip'>
      <h2 className='roundtrip_header'>
        <span>2.</span> Select your departure and your arrival destination
      </h2>
      <form>
        <Row>
          <Col md={6}>
            <div className='roundtrip_from'>
              <label>From : </label>
              <select onChange={(e) => setDeparr({ ...deparr, departure: e.target.value })}>
                {destinations.map((item) => {
                  return (
                    <option value={item.IATA}>
                      {item.city}, {item.country} ({item.IATA})
                    </option>
                  )
                })}
              </select>
            </div>
          </Col>
          <Col md={6}>
            <div className='roundtrip_to'>
              <label>To : </label>
              <select onChange={(e) => setDeparr({ ...deparr, arrival: e.target.value })}>
                {destinations.map((item) => {
                  return (
                    <option value={item.IATA}>
                      {item.city}, {item.country} ({item.IATA})
                    </option>
                  )
                })}
              </select>
            </div>
          </Col>
        </Row>

        <input className='roundtrip_find' type='button' onClick={() => find()} value='Find'></input>
      </form>
    </div>
  )
}

export default Roundtrip
