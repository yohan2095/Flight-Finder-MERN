import React, { useEffect, useState } from "react";
import "./Checkout.css";
import flsrv from "../services/flightService";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLand from "@mui/icons-material/FlightLand";
import DateRange from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PaymentIcon from '@mui/icons-material/Payment';

function Checkout() {
  const [flight, setFlight] = useState({});

  const [booking, setBooking] = useState({
    depT: "",
    arrT: "",
    duration: "",
    pax: "",
    from: "",
    to: "",
    price: "",
  });

  const pax = sessionStorage.getItem("pax");
  const flightID = sessionStorage.getItem("selectedF");
  const flightP = sessionStorage.getItem("selectedP");

  useEffect(async () => {
    let resp = await flsrv.getFlight(flightID);
    setFlight(resp.data);
  });
  return (
    <div className='checkout'>
      <h2 className='checkout_header'>
        <span>05. </span>Confirm your booking
      </h2>

      <form>
        <span className='checkout_passenger'>
          <PersonOutlineIcon className="checkout_passengerIcon" /> <label>{pax}</label>
        </span>
        <br />
        
        <br />
        <span className='checkout_fromto'>
          <FlightTakeoffIcon className='checkout_fromtoIcon' /> {flight.from}{" "}
          <FlightLand className='checkout_fromtoIcon' /> {flight.to}
        </span>{" "}
        <br />
        <span className="checkout_deparr">
          <DateRange className="checkout_deparrIcon" /> Departure : {flight.depT} {' '}
          Arrival : {flight.arrT}
        </span><br/>
        <span className="checkout_duration"><AccessTimeIcon className="checkout_deparrIcon" /> {flight.duration} hours</span><br/>

        <span className='checkout_price'>
          Total price : <label>{flightP}.00$</label>
        </span>{" "} <br/>

        <button className="checkout_valid"><PaymentIcon className="checkout_validIcon" /> Pay</button>
      </form>
    </div>
  );
}

export default Checkout;
