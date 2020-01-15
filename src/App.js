import React from 'react';
import { Router } from 'react-router-dom';
import Routes from 'Routers';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={createBrowserHistory()}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
