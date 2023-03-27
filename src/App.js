import { useState } from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meals/Meal";

function App() {
  const[cartIsShown , setCartIsShown] = useState(false);
  const showCartHandler =()=>{
    setCartIsShown(true)
  }
  const hideCartHandler =()=>{
    setCartIsShown(false)
  }
  return (
    <>
      {cartIsShown ? <Cart onHide={hideCartHandler}/> : null}
      <Header onShow={showCartHandler} />
      <main>
      <Meal/>
      </main>
    </>
  );
}

export default App;
