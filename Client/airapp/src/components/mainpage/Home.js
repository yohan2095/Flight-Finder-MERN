import { Route, Switch, useHistory } from 'react-router'
import './Home.css'
import Flights from '../bookingsystem/oneway/Flights'
import Pasenger from '../bookingsystem/oneway/Pasenger'
import FlightIcon from '@mui/icons-material/Flight'
import Checkout from '../bookingsystem/oneway/Checkout'
import Receipt from '../bookingsystem/Receipt'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import FlightsRT from '../bookingsystem/roundtrip/FlightsRT'
import FlightsRT2 from '../bookingsystem/roundtrip/FlightsRT2'
import PasengerRT from '../bookingsystem/roundtrip/PassengerRT'
import CheckoutRT from '../bookingsystem/roundtrip/CheckoutRT'
import AuthBkg from '../mybooking/AuthBkg'
import Mybooking from '../mybooking/Mybooking'
import Roundtrip from '../bookingsystem/roundtrip/Roundtrip'
import Oneway from '../bookingsystem/oneway/Oneway'
import Ftype from '../bookingsystem/Ftype'

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
      {/* Main router in order to switch between components */}
      <Switch>
        <Route exact path='/'>
          <Ftype />
        </Route>
        <Route path='/oneway'>
          <Oneway />
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

      {/* Reset button which takes the user back to the Home screen in order to restart the booking process */}
      <button className='home_return' onClick={reset}>
        <KeyboardReturnIcon />
      </button>
    </div>
  )
}

export default Home
