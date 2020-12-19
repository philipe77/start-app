import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
