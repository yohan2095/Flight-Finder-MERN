import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Ftype.css";
import dstsrv from "../services/destinationService";
import Destcard from "./Destcard";

function Ftype() {
  const [destinations, setDestinations] = useState([]);

  useEffect(async () => {
    let resp = await dstsrv.getAllDestinations();
    setDestinations(resp.data);
  }, []);

  const history = useHistory();

  const gotoOW = () => {
    history.push("/oneway");
  };

  const gotoRT = () => {
    history.push("/roundtrip");
  };
  return (
    <div className='ftype'>
      <h2 className='ftype_header'>
        <span>1.</span> Select an Option
      </h2>

      <button className='ftype_button' onClick={gotoOW}>
        One Way
      </button>
      <button className='ftype_button' onClick={gotoRT}>
        RoundTrip
      </button>

      <br/><br/><br/>

      <h2>Our Destination :</h2>

      <div>
        {destinations.map((item) => {
          return <Destcard destid={item._id} key={item._id} />;
        })}
      </div>
    </div>
  );
}

export default Ftype;
