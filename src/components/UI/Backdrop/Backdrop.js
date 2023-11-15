import React from 'react';
import classes from "./Backdrop.module.css";
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    const child = <div className={classes.backdrop} onClick={props.hideCartHandler}></div>;
    const container = document.getElementById("backdropBox");
   
    return ReactDOM.createPortal(child,container);
}

export default Backdrop;