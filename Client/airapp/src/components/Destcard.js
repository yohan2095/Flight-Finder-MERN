import React, { useEffect, useState } from "react";
import dstsrv from "../services/destinationService";
import "./Destcard.css";

function Destcard(props) {
  const [destinations, setDestinations] = useState([]);

  useEffect(async () => {
    let resp = await dstsrv.getDestination(props.destid);
    setDestinations(resp.data);
  });

  return (
    <div className='destcard'>
      <div className='destcard_title'>
        {destinations.city}, {destinations.country}
      </div>

      <div
        className='destcard_image'
        style={{ backgroundImage: `url(${destinations.imgUrl})` }}
      ></div>
    </div>
  );
}

export default Destcard;
