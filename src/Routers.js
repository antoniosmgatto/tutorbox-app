import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  VideosView, LoginView
} from 'views';

const Routes = () => {
  return(
  <Switch>
    <Redirect
      exact
      path="/"
      to="/videos"
    />
    <Route
      path="/login"
      component={LoginView}
    />
    <Route
      path="/videos"
      component={VideosView}
    />
  </Switch>
  )
};

export default Routes;
