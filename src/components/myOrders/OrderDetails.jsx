import React from "react";
const OrderDetails=()=>{
    return(
        <section className="orderDetails">
            <main>
                <h1>Order Details</h1>

                <div>
                    <h1>Shipping</h1>
                    <p>
                        <b>Address</b>
                        {"fsd343r42"}
                    </p>
                </div>


                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Name</b>
                        {"Aman"}
                    </p>
                    <p>
                        <b>Phone</b>
                        {"453456346"}
                    </p>
                </div>


                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Order Status</b>
                        {"Processing"}
                    </p>
                    <p>
                        <b>Placed At</b>
                        {"23-02-0222"}
                    </p>
                    <p>
                        <b>Delivered At</b>
                        {"23-02-0223"}
                    </p>
                </div>

                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method</b>
                        {"Online"}
                    </p>
                    <p>
                        <b>Payment Reference</b>
                        #{"etrt435regt"}
                    </p>
                    <p>
                        <b>Paid At</b>
                        {"23-02-0223"}
                    </p>
                </div>


                <div>
                    <h1>Amount</h1>
                    <p>
                        <b>Items Total</b>
                        ₹{3535}
                    </p>
                    <p>
                        <b>Shipping Charges</b>
                        ₹{200}
                    </p>
                    <p>
                        <b>Tax</b>
                        ₹{234}
                    </p>
                    <p>
                        <b>Total Amount</b>
                        ₹{3535+200+234}
                    </p>
                    
                </div>

                <article>
                    <h1>Ordered Items</h1>

                    <div>
                        <h4>Cheese Burger</h4>
                        <div>
                            <span>{12}</span> x <span>{232}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Veg Cheese Burger</h4>
                        <div>
                            <span>{10}</span> x <span>{32}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Cheese Burger with Fries</h4>
                        <div>
                            <span>{5}</span> x <span>{23}</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{
                            fontWeight:800,
                        }}>Sub Total</h4>
                        <div
                        style={{
                            fontWeight:800,
                        }}>₹{2345}</div>
                    </div>
                </article>
            </main>
        </section>
    )
};
export default OrderDetails;