import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { ErrorPage } from './containers/404Page/404Page.component';
import { AppContext } from './AppContext';

function App() {
  const [appState, setAppState] = useState({ gameCode: '20', teamName: '' });

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/404-page">
            <ErrorPage />
          </Route>
          <Redirect to="/404-page" />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}
export default App;
