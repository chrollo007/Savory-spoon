import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png"
const Menu=()=>{

    const addToCartHandler=(itemNum)=>{
       
    }
    return(
        <section id="menu">
            <h1>menu</h1>


            <div>
            <MenuCard itemNum={1} burgerSrc={burger1} price={200} title="Cheese Burger" delay={0.1} handler={addToCartHandler}/>
        <MenuCard itemNum={2} burgerSrc={burger1} price={500} title="Veg Cheese Burger" delay={0.5} handler={addToCartHandler}/>
        <MenuCard itemNum={3} burgerSrc={burger1} price={600} title="Cheese Burger with Fries" delay={0.8} handler={addToCartHandler}/>
            </div>
        </section>
    );
};
export default Menu;