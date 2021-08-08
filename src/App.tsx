import Navbar from "./components/Navbar";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Category, { Categories } from "./pages/Category";
import Welcome from "./pages/Welcome";

import React from "react";
import {
  CartItems,
  RoutineEssentialItems,
  useCart,
  useRoutineEssentals,
} from "./database";
import Credits from "./pages/Credits";
import Leaderboard from "./pages/Leaderboard";

function App() {
  const [cart, setCart] = React.useState<CartItems>({});
  const [routineEssentials, setRoutineEssentials] =
    React.useState<RoutineEssentialItems>({});

  const { get: getCart } = useCart();
  const { get: getRoutineEssentals } = useRoutineEssentals();
  // Make cart & routineEssential data up to date
  React.useEffect(() => {
    async function refreshData() {
      const cartData = (await getCart()) ?? {};
      const cartArray: CartItems = cartData;
      setCart(cartArray);

      const routineData = (await getRoutineEssentals()) ?? {};
      const routineArray: RoutineEssentialItems = routineData;
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
            {Object.values(Categories).map((category) => (
              <Route path={`/explore/${category}`} key={category}>
                <Category
                  category={category}
                  cart={cart}
                  routineEssentials={routineEssentials}
                />
              </Route>
            ))}
            <Route path="/explore">
              <Welcome />
            </Route>
            <Route path="/credits">
              <Credits />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
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
