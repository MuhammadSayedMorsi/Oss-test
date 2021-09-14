import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/app/App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AppSignUP from "./features/auth/AppSignUP";
// import Main from "../../components/users/main/Main";
import AppLogin from "./features/auth/AppLogin";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/sign-up" />
          <Route exact path="/sign-up" component={AppSignUP} />
          <Route exact path="/login" component={AppLogin} />
          <App />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your store to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
