import React, {useState} from "react"
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/cart-context";
import Order from "./components/Order/Order";
import { OrderContextProvider } from "./context/order-context";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [ordersAreShown, setOrdersAreShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  const showOrderHandler = () => {
    setOrdersAreShown(true);
  }

  const hideOrderHandler = () => {
    setOrdersAreShown(false);
  }

  return (
    <OrderContextProvider>
    <CartContextProvider>
      <Header showCartHandler={showCartHandler} showOrderHandler={showOrderHandler}/>
      <main>
        <Meals />
        {cartIsShown && <Cart hideCartHandler={hideCartHandler}/>}
        {ordersAreShown && <Order hideOrderHandler={hideOrderHandler}/>}
      </main>
    </CartContextProvider>
    </OrderContextProvider>
  );
}

export default App;
