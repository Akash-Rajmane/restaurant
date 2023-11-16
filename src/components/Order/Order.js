import React from 'react';
import Backdrop from '../UI/Backdrop/Backdrop';
import OrderModal from '../UI/OrderModal/OrderModal';

const Order = (props) => {
  return (
    <>
        <OrderModal
            hideOrderHandler={props.hideOrderHandler}
        />
        <Backdrop onClick={props.hideOrderHandler}/>
    </>
  )
}

export default Order;