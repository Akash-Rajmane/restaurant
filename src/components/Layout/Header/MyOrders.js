import React from 'react';
import classes from "./MyOrders.module.css";

const MyOrders = (props) => {
  return (
    <button className={classes.btn} onClick={props.showOrderHandler}>My Orders</button>
  )
}

export default MyOrders;