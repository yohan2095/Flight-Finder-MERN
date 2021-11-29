import { useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import flsrv from "../services/flightService";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import eco from '../images/eco.png';


function FlightComp(props) {

    const [flight, setFlight] =useState({});


    useEffect(async () =>
    {
        let resp = await flsrv.getFlight(props.flightid);
        setFlight(resp.data);
    })
    return (
      <div>

        <div>
          <Row>
              <Col sm={12}>
                  <label>Flight Number : {flight.fnum}</label> <br/>
                  <label> From : {flight.from} to {flight.to}</label> <br/>
                  <label>Departure : {flight.depT} - Arrival : {flight.arrT}</label> <br/>
                  <label>Duration : {flight.duration}</label>
                  <label>Datw : {flight.date}</label>
              </Col>
          </Row>
        </div>
      </div>
    );
  }
  
  export default FlightComp;