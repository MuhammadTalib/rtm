import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import LoginPage from "./components/Login/LoginPage";
import MainPage from "./components/MainPage";
import { Provider } from "react-redux";

import Reducer from "./store/reducer";
const store = createStore(Reducer);
const App = props => {
  return (
    <Switch>
      <Route exact path="/" render={props => <LoginPage store={store} />} />
      <Route
        exact
        path="/dashboard"
        render={props => (
          <Provider store={store}>
            <MainPage store={store} />
          </Provider>
        )}
      />
    </Switch>
  );
};

export default App;
