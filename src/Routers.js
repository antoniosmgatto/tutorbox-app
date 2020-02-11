import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from 'components'
import {
  MainLayout,
  Unrestrict as UnrestrictLayout,
} from 'layouts'
import {
<<<<<<< HEAD
  Knowledges, KnowledgeView, VideoView, VideosView, Authentication as AuthenticationView
=======
  Knowledges, KnowledgeView, VideoView, VideosView, LoginView
>>>>>>> adding the new video structure
} from 'views';

const Routes = () => {
  return(
  <Switch>
    <Redirect
      exact
      path="/"
      to="/conhecimentos"
    />
    <RouteWithLayout
      path="/auth"
      component={AuthenticationView}
      layout={UnrestrictLayout}
    />
    <RouteWithLayout
      exact
      path="/conhecimentos"
      component={Knowledges}
      layout={MainLayout}
    />
    <RouteWithLayout
      exact
      path="/conhecimento/novo"
      component={KnowledgeView}
      layout={MainLayout}
    />
    <RouteWithLayout
      exact
      path="/video/novo"
      component={VideoView}
      layout={MainLayout}
    />
    <RouteWithLayout
      exact
      path="/videos"
      component={VideosView}
      layout={MainLayout}
    />
  </Switch>
  )
};

export default Routes;
