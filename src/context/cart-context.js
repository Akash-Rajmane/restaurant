import React,{useReducer} from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;

const defaultState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch(action.type){
        case "ADD":
            const updatedItems = state.items.concat(action.item)
            const updatedTotalAmount = state.totalAmount + action.item.price*action.item.quantity
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        case "REMOVE":
            
            return {

            }
        default: 
            return defaultState;
    }
}

export const CartContextProvider = (props) => {
    const [cartState,dispatch] = useReducer(cartReducer,defaultState);
    const addItemToCartHandler = (item) => {
        dispatch({type:"ADD", item:item})
    }

    const removeItemFromCartHandler = (id) => {
        dispatch({type:"REMOVE",id:id})
    }

    let cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
)
}

