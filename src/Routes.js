import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from './containers/Login'

// switch that handle redirection from gome to login
export default function Routes() {
  return (
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/logins">
        <Login />
      </Route>
      
    </Switch>
  );
}