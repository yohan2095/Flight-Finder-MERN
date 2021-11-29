import { Route, Switch } from "react-router";
import FtypeComp from "./ftype";
import OneWayComp from "./oneway";
import RoundTripComp from "./roundtrip";



function HomeComp() {
    return (
      <div className="App">
          <h1>Air YHN</h1>

          <Switch>
              <Route exact path="/"><FtypeComp /></Route>
              <Route path="/oneway"><OneWayComp /></Route>
              <Route path="/roundtrip"><RoundTripComp /></Route> 
          </Switch>

      </div>
    );
  }
  
  export default HomeComp;
  