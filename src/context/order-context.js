import React,{useState} from "react";

const OrderContext = React.createContext({
    orderItems: []
});

export default OrderContext;


export const OrderContextProvider = (props) => {
    const [orderItems,setOrderItems] = useState([]);

    const addOrderToAllOrders = (newOrder) => {
        setOrderItems((prevOrders)=>[...prevOrders,
        {...newOrder}
        ]);
    }

    let orderContext = {
        orderItems,
        addOrder : addOrderToAllOrders
    }
    
return(
    <OrderContext.Provider value={orderContext}>
        {props.children}
    </OrderContext.Provider>
)
}

