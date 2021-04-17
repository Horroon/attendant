import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Adminscreen = ()=>
<Router>
  <Switch>
    <Route exact path="/user/admin">
        <div>Adminscreen</div>
    </Route>
  </Switch>
</Router>