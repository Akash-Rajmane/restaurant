import React, {useContext} from 'react';
import CartContext from '../../context/cart-context';
import classes from "./CartItems.module.css";

const CartItems = () => {
const {items,addItem, removeItem} = useContext(CartContext);

const addOneItem  = (item) => {
    let newItem = {
        ...item,
        quantity: 1
    }
    addItem(newItem);
}

const removeOneItem = (id) => {
    removeItem(id);
}

  return (
    <>{items.map(meal=>{
        
        return(
        <li className={classes["li-item"]} key={meal.id}>
            <p className={classes["item-details"]}>
                <h2>{meal.name}</h2>
                <p>
                    <span className={classes.price}>${meal.price}</span>
                    <span className={classes.quantity}>
                        x {meal.quantity}
                    </span>
                </p>
            </p>
            <p className={classes.btnBox}>
                <button onClick={()=>removeOneItem(meal.id)}>-</button>
                <button  onClick={()=>addOneItem(meal)}>+</button>
            </p>
        </li>)
    })}</>
  )
}

export default CartItems;