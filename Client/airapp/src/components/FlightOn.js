import { useEffect, useState } from 'react'
import flsrv from '../services/flightService'
import './Flight.css'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import FlightLand from '@mui/icons-material/FlightLand'
import { Col, Row } from 'react-grid-system'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import DateRange from '@mui/icons-material/DateRange'
import { useHistory } from 'react-router'

function FlightOn(props) {
  const history = useHistory()

  const [flight, setFlight] = useState({})

  useEffect(() => {
    async function fetchData() {
      let resp = await flsrv.getFlight(props.flightid)
      setFlight(resp.data)
    }
    fetchData()
  }, [props.flightid])

  const selectF = (e) => {
    sessionStorage.setItem('selectedF', props.flightid)
    sessionStorage.setItem('selectedP', e.target.value)
    history.push('/flightsrt2')
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
              <thead>
                <tr>
                  <th>Economy</th>
                  <th>Premium</th>
                  <th>Business</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{flight.Y}.00$</td>
                  <td>{flight.W}.00$</td>
                  <td>{flight.C}.00$</td>
                </tr>
              </tbody>
              <tfoot>
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
              </tfoot>
            </table>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FlightOn
