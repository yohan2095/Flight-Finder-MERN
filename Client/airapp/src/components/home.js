import { Route, Switch } from "react-router";
import FtypeComp from "./Ftype";
import OneWayComp from "./Oneway";
import RoundTripComp from "./roundtrip";
import "./Home.css";
import Flights from "./Flights";



function Home() {
    return (
      <div className="home">
          <h1 className="home_title">Air YHN - Flight Booking simulator</h1>

          <Switch>
              <Route exact path="/"><FtypeComp /></Route>
              <Route path="/oneway"><OneWayComp /></Route>
              <Route path="/roundtrip"><RoundTripComp /></Route> 
              <Route path="/flights"><Flights /> </Route> 
          </Switch>

      </div>
    );
  }
  
  export default Home;
  