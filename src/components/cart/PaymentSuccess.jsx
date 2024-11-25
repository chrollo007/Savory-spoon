import React from "react";
import { Link } from "react-router-dom";
const PaymentSuccess=()=>{
    return(
       <section className="paymentSuccess">
        <main>
            <h1>Order Confirmer</h1>
            <p>Order Places Successfully, You can check order status
                below
            </p>
            <Link to="/myorders">Check Status</Link>
        </main>
       </section>
    )
}
export default PaymentSuccess;