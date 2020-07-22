import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './containers/Home/Home';
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
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}
export default App;
