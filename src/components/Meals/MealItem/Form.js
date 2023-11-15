import React, { useContext, useRef } from 'react';
import classes from './Form.module.css';
import Input from '../../UI/Input/Input';
import CartContext from '../../../context/cart-context';

const Form = (props) => {
  const quantityRef = useRef();
 
  const {addItem, items} = useContext(CartContext); 
  console.log(items);
  
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredQuantity = quantityRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;

    if (
      enteredQuantity.trim().length === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 10
    ) {
      alert("Please enter valid quantity (1-10)")
      return;
    }

    let item = {
      id:props.id,
      name: props.name,
      quantity:enteredQuantityNumber,
      price: props.price,
      description: props.description
    }

    addItem(item);

  }

 
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input
        type="number"
        label="Quantity"
        id="quantity"
        defaultValue={1}
        step={1}
        min={1}
        max={10}
        ref={quantityRef}
        />
        <button type="submit">+ Add</button>
    </form>
  )
}

export default Form;