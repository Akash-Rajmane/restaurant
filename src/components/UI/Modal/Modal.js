import React, {useContext} from 'react';
import classes from "./Modal.module.css";
import ReactDOM  from 'react-dom';
import CartContext from '../../../context/cart-context';

const Modal = (props) => {
    const {totalAmount,removeAllItems} = useContext(CartContext);

    const orderConfirmationHandler = () => {
        alert("Your order is successful.");
        props.hideCartHandler();
        removeAllItems();
    }

    const child = <div className={classes.modal}>
                    <ul>{props.cartItems}</ul>
                    <h2 className={classes.cost}>
                        <span>Total Amount</span>
                        <span>{totalAmount.toFixed(2)}</span>
                    </h2>
                    <div className={classes.btnBox}>
                        <button className={classes.closeBtn} onClick={props.hideCartHandler}>Close</button>
                        <button className={classes.orderBtn} onClick={orderConfirmationHandler}>Order</button>
                    </div>
                </div>
    const container = document.getElementById("modalBox");

  return ReactDOM.createPortal(child,container);
}

export default Modal;