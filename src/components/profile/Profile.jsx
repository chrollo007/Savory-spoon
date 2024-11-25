import React from "react";
import {motion} from "framer-motion";
import me from "../../assets/yummy-smile-emoji-with-tongue-lick-mouth-delicious-tasty-food-symbol-for-social-network-yummy-and-hungry-icon-savory-gourmet-enjoy-food-sign-illustration-isolated-on-yellow-background-vector.jpg"
import { Link } from "react-router-dom";
const Profile=()=>{
    const options={
        initial:{
            y:"-100%",
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
        },
    };
    return(
        <section className="profile">
            <main>
                <motion.img src={me} alt="User" {...options}/>
                <motion.h5 {...options} transition={{delay:0.3}}>Aman</motion.h5>

                <motion.div {...options} transition={{delay:0.5}}>
                    <Link to="/admin/dashboard" style={{
                        borderRadius:0,
                        backgroundColor:"rgb(40,40,40)",
                    }}>Dashboard</Link>
                </motion.div>
                <motion.div 
                initial={{
                    x:"-100vw",
                    opacity:0,
                }}
                animate={{
                    x:0,
                    opacity:1,
                }}
                >
                    <Link to="/myorders">Orders</Link>
                </motion.div>

                <motion.button
                initial={{
                    x:"-100vw",
                    opacity:0,
                }}
                animate={{
                    x:0,
                    opacity:1,
                }}
                transition={{delay:0.3}}
                >
                    Logout
                </motion.button>
            </main>
        </section>
    )
};
export default Profile;