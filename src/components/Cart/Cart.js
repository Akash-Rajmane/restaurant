import React from 'react';
import Modal from "../UI/Modal/Modal";
import Backdrop from "../UI/Backdrop/Backdrop";
import CartItems from './CartItems';

const Cart = (props) => {
  return (
    <>
    <Modal 
        cartItems={<CartItems/>}
        hideCartHandler={props.hideCartHandler}
    />
    <Backdrop onClick={props.hideCartHandler}/>
    </>
  )
}

export default Cart;
