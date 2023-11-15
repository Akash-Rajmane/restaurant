import React, {useContext} from 'react';
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from '../../../context/cart-context';

const HeaderCartButton = (props) => {
  const {items} = useContext(CartContext);
  const numberOfCartItems = items.reduce((total,curr)=>total += Number(curr.quantity),0)
  return (
    <button className={classes.button} onClick={props.showCartHandler}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton;