import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Passenger.css";

function PasengerRT() {
  const history = useHistory();

  const [passenger, setPassenger] = useState({ fname: "", lname: "" });

  const setPax = () => {
    const paxN = passenger.fname + " " + passenger.lname;
    sessionStorage.setItem("pax", paxN);
    history.push("/checkoutrt");
  };

  return (
    <div className='passenger'>
      <h2 className='passenger_header'>
        <span>4. </span>Fill your details
      </h2>
        <label>First Name :</label>{" "}
        <input
          type='text'
          onChange={(e) =>
            setPassenger({ ...passenger, fname: e.target.value })
          }
        ></input>
        <label>Last Name :</label>{" "}
        <input
          type='text'
          onChange={(e) =>
            setPassenger({ ...passenger, lname: e.target.value })
          }
        ></input>{" "}
        <br />
        <input
          className='oneway_find'
          type='button'
          value='Next'
          onClick={() => setPax()}
        ></input>
    </div>
  );
}

export default PasengerRT;