import React from 'react';
import './PaymentReceived.css';
import Logo from "../../../images/BookaRoom/Logo.png";
import Okay from "../../../images/BookaRoom/okay.png";

export default function PaymentReceived_Book(){
    return(
        <div className="payment_book">
            <div>
            <div className="receive_msg_book"><img  src={Logo} className="payment_logo_book" ></img></div>
              <div className="receive_msg_book"><img src={Okay}  className="okay_book"></img></div>
              <div><h4 className="payment_received_book">Payment Received</h4></div>
              <div className="receive_msg_book">Thank you, Your payment has been</div>
              <div className="receive_msg_book"> successfull. A conformation email has been</div>
              <div className="receive_msg_book">sent to</div>
              <div className="receive_msg_book"><h4 className="email_book">Dalal@gmail.com</h4></div>

            </div>
             






        </div>
    )
}