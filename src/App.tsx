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
                category={Categories.FrozenFood}
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore/fruits">
              <Category
                category={Categories.Fruits}
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore/vegetables">
              <Category
                category={Categories.Vegetables}
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore/general">
              <Category
                category={Categories.General}
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore/furniture">
              <Category
                category={Categories.Furniture}
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore/electronics">
              <Category
                category={Categories.Electronics}
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore/clothes">
              <Category
                category={Categories.Clothes}
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore/all">
              <Category
                category={Categories.All}
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </Route>
            <Route path="/explore">
              <Welcome />
            </Route>
            <Route path="/credits">
              <Credits />
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
