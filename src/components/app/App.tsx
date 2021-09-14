import React from "react";
import "./App.scss";
// import Login from "../../features/auth/AppLogin";

import { Container } from "react-bootstrap";
import Sidebar from "../sideBar/SideBar";
// import Home from "../pages/home/Home";
import Home from "../../pages/home/Home";

import Order from "../../pages/order/Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderDetails from "../../pages/order/OrderDetails";
// import { createBrowserHistory } from "history";
import Staff from "../../pages/staff/Staff";
function App() {
  return (
    <Container fluid>
      <div className="main_app">
        <Sidebar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/orders">
            <Order />
          </Route>

          <Route exact path="/orders/order-details" component={OrderDetails} />
          <Route exact path="/my-staffs" component={Staff} />
        </Switch>
      </div>
    </Container>
  );
}

export default App;
