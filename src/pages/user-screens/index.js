import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const UserScreen = ()=>
<Router>
  <Switch>
    <Route exact path="/attendant/user/main">
      <div>user screen</div>
    </Route>
  </Switch>
</Router>