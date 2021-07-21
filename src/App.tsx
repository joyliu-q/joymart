import Navbar from "./components/Navbar";

import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Explore from "./pages/Explore";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/explore">
              <Explore />
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
