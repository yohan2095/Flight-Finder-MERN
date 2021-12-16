import { useEffect, useState } from 'react'
import flsrv from '../services/flightService'
import './Flight.css'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import FlightLand from '@mui/icons-material/FlightLand'
import { Col, Row } from 'react-grid-system'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import DateRange from '@mui/icons-material/DateRange'
import { useHistory } from 'react-router'

function FlightOu(props) {
  const history = useHistory()

  const [flight, setFlight] = useState({})

  useEffect(() => {
    async function fetchData() {
      let resp = await flsrv.getFlight(props.flightid2)
      setFlight(resp.data)
    }
    fetchData()
  }, [props.flightid2])

  const selectF = (e) => {
    sessionStorage.setItem('selectedF2', props.flightid2)
    sessionStorage.setItem('selectedP2', e.target.value)
    history.push('/passengerrt')
  }

  return (
    <div className='flight'>
      <div className='flight_container'>
        <Row>
          <Col md={6}>
            <label className='flight_fnumber'>{flight.fnum}</label> <br />
            <label className='flight_fromto'>
              {' '}
              <FlightTakeoffIcon className='flight_icon' /> {flight.from}{' '}
              <FlightLand className='flight_icon' /> {flight.to}
            </label>{' '}
            <br />
            <label className='flight_time'>
              <DateRange className='flight_iconDate' />
              Take-off: {flight.depT} Landing : {flight.arrT}
            </label>{' '}
            <br />
            <label className='flight_duration'>
              <AccessTimeIcon className='flight_iconTime' /> Duration : {flight.duration}
            </label>
          </Col>

          <Col md={6}>
            <table className='flight_table'>
              <tr>
                <th>Economy</th>
                <th>Premium</th>
                <th>Business</th>
              </tr>
              <tr>
                <td>{flight.Y}.00$</td>
                <td>{flight.W}.00$</td>
                <td>{flight.C}.00$</td>
              </tr>
              <tr>
                <td>
                  <button value={flight.Y} className='flight_button' onClick={selectF}>
                    Select
                  </button>
                </td>
                <td>
                  <button value={flight.W} className='flight_button' onClick={selectF}>
                    Select
                  </button>
                </td>
                <td>
                  <button value={flight.C} className='flight_button' onClick={selectF}>
                    Select
                  </button>
                </td>
              </tr>
            </table>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FlightOu