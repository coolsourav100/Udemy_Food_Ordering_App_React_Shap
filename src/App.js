import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meals/Meal";

function App() {
  return (
    <>
      <Cart/>
      <Header/>
      <main>
      <Meal/>
      </main>
    </>
  );
}

export default App;
