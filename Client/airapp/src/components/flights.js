import { useEffect, useState } from "react";
import { Col } from "react-grid-system";
import flsrv from "../services/flightService";
import Flight from "./Flight";
import "./Flights.css";

function Flights() {
  const [flights, setFlights] = useState([]);
  const [flightr, setFlightr] = useState([]);

  const depart = sessionStorage.getItem("Dep");
  const arrive = sessionStorage.getItem("Arr");

  useEffect(async () => {
    let resp = await flsrv.getAllFlights();
    setFlights(resp.data);
  }, []);

  useEffect(async () => {
    filterF();
  }, [flights]);

  const filterF = () => {
    let flresult = [];
    flights.forEach((fl) => {
      if (fl.from == depart && fl.to == arrive) {
        flresult.push(fl._id);
      }
    });
    setFlightr(flresult);
    console.log(flights);
  };

  return (
    <div className='flights'>
      <h2 className='flights_header'>
        <span>3. </span>Select your flight
      </h2>

      <div>
        {flightr.map((item) => {
          return <Flight flightid={item} key={item} />;
        })}
      </div>
    </div>
  );
}

export default Flights;
