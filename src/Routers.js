import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  VideosView
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
      path="/videos"
      component={VideosView}
    />
  </Switch>
  )
};

export default Routes;
