import { useHistory } from 'react-router-dom';
import React from "react";
import "./Ftype.css";

function Ftype() {

    const history = useHistory();

    const gotoOW = () =>
    {
        history.push('/oneway')
    }

    const gotoRT = () =>
    {
        history.push('/roundtrip')
    }
    return (
      <div className="ftype">
          <h2 className="ftype_header"><span>1.</span> Select an Option</h2>


          <button className="ftype_button" onClick={gotoOW}>One Way</button>
          <button className="ftype_button" onClick={gotoRT}>RoundTrip</button>
          

      </div>
    );
  }
  
  export default Ftype;