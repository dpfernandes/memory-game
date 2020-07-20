import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { ErrorPage } from './containers/404Page/404Page.component';
import { GamePage } from './containers/GamePage/GamePage.component';
import { PickGamePage } from './containers/PickGamePage/PickGamePage.component';
import { PickLevelPage } from './containers/PickLevelPage/PickLevelPage.component';
import { RecipePage } from './containers/RecipePage/RecipePage.component';
import { VoucherPage } from './containers/VoucherPage/VoucherPage.component';
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
          <Route exact path="/game-page">
            <GamePage />
          </Route>
          <Route exact path="/pick-game-page">
            <PickGamePage />
          </Route>
          <Route exact path="/pick-level-page">
            <PickLevelPage />
          </Route>
          <Route exact path="/voucher-page">
            <VoucherPage />
          </Route>
          <Route exact path="/recipe-page">
            <RecipePage />
          </Route>
          <Route exact path="/voucher-page">
            <VoucherPage />
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
