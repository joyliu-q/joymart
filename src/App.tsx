import Navbar from "./components/Navbar";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import React from "react";
import { RoutineEssentialItem, useCart, useRoutineEssentals } from "./database";
function App() {
  const [cart, setCart] = React.useState<Record<string, { count: number }>>({});
  const [routineEssentials, setRoutineEssentials] = React.useState<
    RoutineEssentialItem[]
  >([]);

  const { get: getCart } = useCart();
  const { get: getRoutineEssentals } = useRoutineEssentals();
  // Make cart & routineEssential data up to date
  React.useEffect(() => {
    async function refreshData() {
      const cartData = (await getCart()) ?? {};
      const cartArray: Record<string, { count: number }> = cartData;
      setCart(cartArray);

      const routineData = (await getRoutineEssentals()) ?? {};
      const routineArray: RoutineEssentialItem[] = Object.entries(routineData);
      setRoutineEssentials(routineArray);
    }
    refreshData();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/cart">
              <Cart
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore">
              <Explore
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
