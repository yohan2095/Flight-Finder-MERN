import React from 'react';
import "./Receipt.css";

function Receipt() {

    const bkgCode = sessionStorage.getItem("bookingCode");
    return (
        <div className="receipt">

            <h1>Congrats !</h1> <br/>

            <h2>Your booking code is : <span className="receipt_bkgCode">{bkgCode}</span></h2> <br/>

            <h5>Keep it safe and have a pleasant flight.</h5>
            
        </div>
    )
}

export default Receipt
