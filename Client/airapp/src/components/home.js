import { Route, Switch } from "react-router";
import FtypeComp from "./Ftype";
import OneWayComp from "./Oneway";
import RoundTripComp from "./roundtrip";
import "./Home.css";
import Flights from "./Flights";
import Pasenger from "./Pasenger";
import FlightIcon from '@mui/icons-material/Flight';
import Checkout from "./Checkout";



function Home() {
    return (
      <div className="home">
          <h1 className="home_title">Air YHN <FlightIcon className="home_titleIcon" /> Flight booking simulator</h1>

          <Switch>
              <Route exact path="/"><FtypeComp /></Route>
              <Route path="/oneway"><OneWayComp /></Route>
              <Route path="/roundtrip"><RoundTripComp /></Route> 
              <Route path="/flights"><Flights /></Route> 
              <Route path="/passenger"><Pasenger /></Route> 
              <Route path="/checkout"><Checkout /></Route> 
          </Switch>

      </div>
    );
  }
  
  export default Home;
  