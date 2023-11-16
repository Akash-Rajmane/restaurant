import React, {useContext} from 'react';
import classes from "./Modal.module.css";
import ReactDOM  from 'react-dom';
import CartContext from '../../../context/cart-context';
import OrderContext from "../../../context/order-context";

const Modal = (props) => {
    const {totalAmount,removeAllItems,items} = useContext(CartContext);
    const {addOrder} = useContext(OrderContext);

    const orderConfirmationHandler = () => {
        let newOrder = { 
            items,
            totalAmount,
            date: new Date(),
            id: new Date().toString()
        }
        addOrder(newOrder);
        alert("Your order is successful.");
        props.hideCartHandler();
        removeAllItems();
    }

    const child = <div className={classes.modal}>
                    { items.length>0 ?  
                    <>
                    <ul>{props.cartItems}</ul>
                    <h2 className={classes.cost}>
                        <span>Total Amount</span>
                        <span>{totalAmount.toFixed(2)}</span>
                    </h2>
                    </>
                    :
                    <h1>Cart is empty</h1>
                    }
                    <div className={classes.btnBox}>
                        <button className={classes.closeBtn} onClick={props.hideCartHandler}>Close</button>
                        {items.length>0 && <button className={classes.orderBtn} onClick={orderConfirmationHandler}>Order</button>}
                    </div>
                </div>
    const container = document.getElementById("modalBox");

  return ReactDOM.createPortal(child,container);
}

export default Modal;