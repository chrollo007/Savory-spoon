import React from "react";
import {Link} from "react-router-dom";
import {RiFindReplaceLine} from "react-icons/ri";
import me from "../../assets/yummy-smile-emoji-with-tongue-lick-mouth-delicious-tasty-food-symbol-for-social-network-yummy-and-hungry-icon-savory-gourmet-enjoy-food-sign-illustration-isolated-on-yellow-background-vector.jpg";
const About=()=>{
    return(
        <section className="about">
            <main>
                <h1>About Us</h1>

                <article>
                    <h4>SavorySpoon</h4>
                    <p>We are SavorySpoon. The best place for you appetite</p>
                    <p>
                        With Different Varieties of Dishes. Click below to see the menu
                    </p>

                    <Link to="/">
                    <RiFindReplaceLine/>
                    </Link>
                </article>

                <div>
                    <h2>Founder</h2>
                    <article>
                        <div>
                            <img src={me} alt="" />
                            <h3>Aman</h3>
                        </div>
                    </article>
                </div>
            </main>
        </section>
    )
};

export default About;