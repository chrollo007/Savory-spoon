import React from "react";
import {AiFillInstagram,AiFillGithub,AiFillTwitterCircle} from "react-icons/ai"
const Footer=()=>{
    return(
       <footer>
        <div>
            <h2>SavorySpoon</h2>
            <p>We are trying to give the best taste possible.</p>
            <br />
            <em>We give attention to genuine feedback.</em>

            <strong>All rights reserved @SavorySpoon</strong>
        </div>
        <aside>
            <h4>Follow us</h4>

            <a href="https://instagram.com">
            <AiFillInstagram/></a>
            <a href="https://github.com">
            <AiFillGithub/></a>
            <a href="https://twitter.com">
            <AiFillTwitterCircle/></a>
        </aside>
       </footer>
    )
}
export default Footer;