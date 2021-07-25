import Navbar from "./components/Navbar";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Welcome from "./pages/Welcome";

import React from "react";
import {
  CartItems,
  RoutineEssentialItems,
  useCart,
  useRoutineEssentals,
} from "./database";

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

            <Route path="/explore/frozen-food">
              <Category
                category="frozen-food"
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore/fruits">
              <Category
                category="fruits"
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore/vegetables">
              <Category
                category="vegetables"
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore/general">
              <Category
                category="general"
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore/furniture">
              <Category
                category="furniture"
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore/electronics">
              <Category
                category="electronics"
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>

            <Route path="/explore/clothes">
              <Category
                category="clothes"
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore/all">
              <Category
                category="all"
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore">
              <Welcome />
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
