import { Route, Switch, useHistory } from 'react-router'
import FtypeComp from './Ftype'
import OneWayComp from './Oneway'
import './Home.css'
import Flights from './Flights'
import Pasenger from './Pasenger'
import FlightIcon from '@mui/icons-material/Flight'
import Checkout from './Checkout'
import Receipt from './Receipt'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import Roundtrip from './Roundtrip'
import FlightsRT from './FlightsRT'
import FlightsRT2 from './FlightsRT2'
import PasengerRT from './PassengerRT'
import CheckoutRT from './CheckoutRT'
import AuthBkg from './AuthBkg'
import Mybooking from './Mybooking'

function Home() {
  const history = useHistory()

  const reset = () => {
    history.push('/')
  }
  return (
    <div className='home'>
      <h1 className='home_title'>
        Air YHN <FlightIcon className='home_titleIcon' /> Flight booking simulator
      </h1>

      <Switch>
        <Route exact path='/'>
          <FtypeComp />
        </Route>
        <Route path='/oneway'>
          <OneWayComp />
        </Route>
        <Route path='/roundtrip'>
          <Roundtrip />
        </Route>
        <Route path='/flights'>
          <Flights />
        </Route>
        <Route path='/passenger'>
          <Pasenger />
        </Route>
        <Route path='/passengerrt'>
          <PasengerRT />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/checkoutrt'>
          <CheckoutRT />
        </Route>
        <Route path='/receipt'>
          <Receipt />
        </Route>
        <Route path='/flightsrt'>
          <FlightsRT />
        </Route>
        <Route path='/flightsrt2'>
          <FlightsRT2 />
        </Route>
        <Route path='/authbkg'>
          <AuthBkg />
        </Route>
        <Route path='/mybooking'>
          <Mybooking />
        </Route>
      </Switch>

      <button className='home_return' onClick={reset}>
        <KeyboardReturnIcon />
      </button>
    </div>
  )
}

export default Home
