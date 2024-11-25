import React from "react";
import {motion} from "framer-motion";
import me from "../../assets/yummy.jpg";
const Founder=()=>{
    
    const options={
        initial:{
            x:"-100%",
            opacity:0,
        },
        whileInView:{
            x:0,
            opacity:1,
        },
    };


    return (
    <section className="founder">
        <motion.div
        {...options}>
            <img src={me} alt="founder" height={200} width={200} />

            <h3>Aman Rajbhar</h3>
        <p>Hey, Everyone I am Aman Rajbhar, The founder of SavorySpoon.
            <br />
            Our Aim is to provide the most tasty food out there.

        </p>
        </motion.div>

       
    </section>
    );
};
export default Founder;
