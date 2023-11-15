import React from 'react';
import Modal from "../UI/Modal/Modal";
import Backdrop from "../UI/Backdrop/Backdrop";

const Cart = (props) => {
    const cartItems = "sushi";
  return (
    <>
    <Modal 
        cartItems={cartItems}
        hideCartHandler={props.hideCartHandler}
    />
    <Backdrop hideCartHandler={props.hideCartHandler}/>
    </>
  )
}

export default Cart;
