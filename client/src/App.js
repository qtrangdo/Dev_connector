import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import { Provider } from 'react-redux';

import NavBar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  // useEffect is similar to componentDidMount + setInterval, [] at the end ensure it to run once only
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />,
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>

        </Fragment>
      </Router>
    </Provider >
  );
}

export default App;
