import React from 'react';
import classes from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";
import HeaderCartButton from './HeaderCartButton';
import MyOrdersButton from './MyOrders';

const Header = (props) => {
  
return (
    <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <div className={classes.btnsBox}>
                <MyOrdersButton showOrderHandler={props.showOrderHandler}/>
                <HeaderCartButton showCartHandler={props.showCartHandler}/>
            </div>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="A table full of delicious food"/>
        </div>
    </>
  )
}

export default Header;