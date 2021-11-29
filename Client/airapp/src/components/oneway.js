import {useEffect, useState} from 'react';
import dstsrv from '../services/destinationService';
import { Col, Row } from 'react-grid-system';
import FlightsComp from './flights';


function OneWayComp() {

    const [destinations, setDestinations] = useState([]);
    const [deparr, setDeparr] = useState({departure : 'TLV', arrival : 'TLV'})
    const [page, setPage] = useState("search");


    useEffect(async () =>
    {
        let resp = await dstsrv.getAllDestinations();
        setDestinations(resp.data);
    }, [])

    const find = () =>
    {
        console.log(deparr)
        sessionStorage.setItem("Dep", deparr.departure)
        sessionStorage.setItem("Arr", deparr.arrival)
    }

    return (
      <div className="App">

          

          <br/>

          <Row>
              
              <Col sm={12}>

          <div>

          <form>
          
          <label>From : </label>
          <select onChange={e => setDeparr({...deparr, departure : e.target.value})}>
              {
                  destinations.map(item =>
                    {
                        return <option value={item.IATA}>{item.city}, {item.country} ({item.IATA})</option>
                    })
              }
          </select>

          <label>To : </label>
          <select onChange={e => setDeparr({...deparr, arrival : e.target.value})}>
              {
                  destinations.map(item =>
                    {
                        return <option value={item.IATA}>{item.city}, {item.country} ({item.IATA})</option>
                    })
              }
          </select>

          

          <input type="button" onClick={() => find() + setPage("flights")} value="Find" ></input>

          {page === "search"}
          {page === "flights" && <FlightsComp />}

          
          

          </form>
          </div>
          </Col>
          </Row>
      </div>
    );
  }
  
  export default OneWayComp;
  