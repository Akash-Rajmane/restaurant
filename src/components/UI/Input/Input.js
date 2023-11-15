import React from 'react';
import classes from "./Input.module.css";

const Input = React.forwardRef(({id,label,type,...props},ref) => {
  return (
    <div className={classes.input}>
        <label htmlFor={id}>{label}</label>
        <input
        type={type}
        ref={ref}
        {...props}
        />
  </div>
  )
})

export default Input;