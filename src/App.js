import React from 'react';
import { Router } from 'react-router-dom';
import Routes from 'Routers';
import { createBrowserHistory } from 'history';
import 'assets/App.css';

const App = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Routes />
    </Router>
  );
}

export default App;
