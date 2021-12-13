import { useEffect, useState } from "react";
import flsrv from "../services/flightService";
import "./Flight.css";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLand from "@mui/icons-material/FlightLand";
import { Col, Row } from "react-grid-system";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DateRange from "@mui/icons-material/DateRange";

function Flight(props) {
  const [flight, setFlight] = useState({});

  useEffect(async () => {
    let resp = await flsrv.getFlight(props.flightid);
    setFlight(resp.data);
  });

  return (
    <div className='flight'>
      <div className='flight_container'>
        <Row>
          <Col md={6}>
            <label className='flight_fnumber'>{flight.fnum}</label> <br />
            <label className='flight_fromto'>
              {" "}
              <FlightTakeoffIcon className='flight_icon' /> {flight.from}{" "}
              <FlightLand className='flight_icon' /> {flight.to}
            </label>{" "}
            <br />
            <label className='flight_time'>
              <DateRange className='flight_iconDate' />
              Take-off: {flight.depT} Landing : {flight.arrT}
            </label>{" "}
            <br />
            <label className='flight_duration'>
              <AccessTimeIcon className='flight_iconTime' /> Duration :{" "}
              {flight.duration}
            </label>
          </Col>

          <Col md={6}>
            <table className="flight_table">
              <tr>
                <th>Economy</th>
                <th>Premium</th>
                <th>Business</th>
              </tr>
              <tr>
                <td>{flight.Y}.00$</td>
                <td>{flight.W}.00$</td>
                <td>{flight.C}.00$</td>
              </tr>
              <tr>
                <td><button className="flight_button">Select</button></td>
                <td><button className="flight_button">Select</button></td>
                <td><button className="flight_button">Select</button></td>
              </tr>
            </table>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Flight;
