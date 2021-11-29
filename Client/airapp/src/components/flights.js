import {useEffect, useState} from 'react';
import { Col } from 'react-grid-system';
import flsrv from '../services/flightService';
import FlightComp from './flight';





function FlightsComp() {
    const [flights, setFlights] = useState([]);
    const [flightr, setFlightr] = useState([]);

    const depart = sessionStorage.getItem("Dep");
    const arrive = sessionStorage.getItem("Arr");

    useEffect(async () =>
    {
        let resp = await flsrv.getAllFlights();
        setFlights(resp.data);
    }, [])

    const filterF = () =>
    {
        let flresult = [];
        console.log(flights)
        console.log(depart)
        console.log(arrive)
        flights.forEach(fl => {
            if(fl.from == depart && fl.to == arrive)
            {
                flresult.push(fl._id);
                console.log(fl._id)
            }
            
        });
        setFlightr(flresult);
    }

    return (
      <div className="App">
          <h2>Flights Available</h2>

          <input type="button" onClick={filterF} value="Show Flights" />

          <div>
              {
                  flightr.map(item =>
                    {
                        return <FlightComp flightid={item} key={item} />
                    })
              }
          </div>

         
      </div>
    );
  }
  
  export default FlightsComp;