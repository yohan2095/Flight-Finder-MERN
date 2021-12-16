import React, { useEffect, useState } from "react";
import "./Checkout.css";
import flsrv from "../services/flightService";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLand from "@mui/icons-material/FlightLand";
import DateRange from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PaymentIcon from "@mui/icons-material/Payment";
import axios from "axios";
import { useHistory } from "react-router";

function Checkout() {

  const history = useHistory();

  const [flight, setFlight] = useState({});

  const [booking, setBooking] = useState({
    depT: "",
    arrT: "",
    duration: "",
    pax: "",
    from: "",
    to: "",
    price: "",
    pnr: "",
    fnum: "",
  });

  const pax = sessionStorage.getItem("pax");
  const flightID = sessionStorage.getItem("selectedF");
  const flightP = sessionStorage.getItem("selectedP");

  useEffect(async () => {
    let resp = await flsrv.getFlight(flightID);
    setFlight(resp.data);
    pay();
  }, [booking]);

  const pay = async () => {
    {
      /* Generate PNR number */
    }
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ23456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    const Gpnr = result;

    {
      /* Set data into booking */
    }
    setBooking({
      depT: flight.depT,
      arrT: flight.arrT,
      duration: flight.duration,
      pax: pax,
      from: flight.from,
      to: flight.to,
      price: flightP,
      pnr: Gpnr,
      fnum: flight.fnum,
    });

    sessionStorage.setItem("bookingCode", Gpnr)
  };

  const save = async () => {
    {
      /* POST to DB */
    }
    let status = await axios.post(
      "http://localhost:8000/api/bookings/",
      booking
    );

    history.push("/receipt");
  };
  return (
    <div className='checkout'>
      <h2 className='checkout_header'>
        <span>05. </span>Confirm your booking
      </h2>
      <span className='checkout_passenger'>
        <PersonOutlineIcon className='checkout_passengerIcon' />{" "}
        <label>{pax}</label>
      </span>
      <br /> <br />
      <span className='checkout_fnum'>{flight.fnum}</span>
      <br />
      <span className='checkout_fromto'>
        <FlightTakeoffIcon className='checkout_fromtoIcon' /> {flight.from}{" "}
        <FlightLand className='checkout_fromtoIcon' /> {flight.to}
      </span>{" "}
      <br />
      <span className='checkout_deparr'>
        <DateRange className='checkout_deparrIcon' /> Departure : {flight.depT}{" "}
        Arrival : {flight.arrT}
      </span>
      <br />
      <span className='checkout_duration'>
        <AccessTimeIcon className='checkout_deparrIcon' /> {flight.duration}{" "}
        hours
      </span>
      <br />
      <span className='checkout_price'>
        Total price : <label>{flightP}.00$</label>
      </span>{" "}
      <br />
      <button className='checkout_valid' onClick={save}>
        <PaymentIcon className='checkout_validIcon' /> Pay
      </button>{" "}
      <br />
      <span className='checkout_info'>
        *It's not a real payment. It will lead to your free booking
        confirmation.
      </span>
    </div>
  );
}

export default Checkout;
