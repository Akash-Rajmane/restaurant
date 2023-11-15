import React from 'react';
import classes from './Form.module.css';
import Input from '../../UI/Input/Input';

const Form = (props) => {
  return (
    <form className={classes.form}>
        <Input
        type="number"
        label="Amount"
        id="amount"
        defaultValue={1}
        />
        <button>+ Add</button>
    </form>
  )
}

export default Form;