import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Checkout from "./Checkout";
// import Login from "./Login";
// import Payment from "./Payment";
// import Orders from "./Orders";
// import { auth } from "./firebase";
// import { useStateValue } from "./StateProvider";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

 
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* <Route path="/orders">
            <Header />
            <Orders />
          </Route> */}
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/checkout">
            <Header />
            <h1>checkout bitchhh!</h1>
            {/* <Checkout /> */}
          </Route>
          {/* <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
