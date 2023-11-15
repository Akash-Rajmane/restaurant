import React, {useState} from "react"
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/cart-context";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartContextProvider>
      <Header showCartHandler={showCartHandler}/>
      <main>
        <Meals />
        {cartIsShown && <Cart hideCartHandler={hideCartHandler}/>}
      </main>
    </CartContextProvider>
  );
}

export default App;
