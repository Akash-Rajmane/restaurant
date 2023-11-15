import React from 'react';
import classes from "./Modal.module.css";
import ReactDOM  from 'react-dom';

const Modal = () => {
    const child = <div className={classes.modal}>
                    <div className={classes.foods}>sushi</div>
                    <h2 className={classes.cost}>
                        <span>Total Amount</span>
                        <span>35.62</span>
                    </h2>
                    <div className={classes.btnBox}>
                        <button className={classes.closeBtn}>Close</button>
                        <button className={classes.orderBtn}>Order</button>
                    </div>
                </div>
    const container = document.getElementById("modalBox");

  return ReactDOM.createPortal(child,container);
}

export default Modal;