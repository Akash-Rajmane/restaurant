import React, { useContext } from 'react';
import classes from "./OrderModal.module.css";
import ReactDOM  from 'react-dom';
import OrderContext from '../../../context/order-context';

const OrderModal = (props) => {
    const {orderItems} = useContext(OrderContext);

    const orderItemsSortedByDate = orderItems.sort((a,b)=>{ 
        let A = new Date(a.date).getTime();
        let B = new Date(b.date).getTime();
        return B-A;
    })

    let child = <div className={classes.modal}>
                    <ul>
                        {orderItems.length===0 && <h1>No orders yet</h1>}
                        {orderItems.length>0 && orderItemsSortedByDate.map(order=>{
                            
                            return(
                                <li key={order.id} className={classes.orderitem}>
                                    <div className={classes.date}>{order.date.toLocaleString()}</div>
                                    <div>
                                       {order.items.map(el=>{
                                        return(
                                            <div key={el.id} className={classes.itemDetails}>
                                                <span>{el.name}</span>
                                                <span>Price/Unit: ${el.price}</span>
                                                <span>Quantity: {el.quantity}</span>
                                            </div>
                                        )
                                       })}
                                    </div>
                                    <div className={classes.orderCost}>
                                        <span>Order Amount</span>
                                        <span>${order.totalAmount.toFixed(2)}</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <button className={classes.closeBtn} onClick={props.hideOrderHandler}>Close</button>
                </div>

    const container = document.getElementById("modalBox");

    return ReactDOM.createPortal(child,container);
}

export default OrderModal;