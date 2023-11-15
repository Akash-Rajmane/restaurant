import React from 'react';
import classes from "./Input.module.css";

const Input = ({id,label,type,value,...props}) => {
  return (
    <div className={classes.input}>
        <label htmlFor={id}>{label}</label>
        <input
        type={type}
        value={value}
        {...props}
        />
  </div>
  )
}

export default Input;