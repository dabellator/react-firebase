import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Services/Store';
import browserHistory from './Services/History';
import { Redirect, Router, Route, IndexRoute } from 'react-router';
import { isLoggedIn, isGuest } from './Services/AuthMiddleware';

// contexts
import App from './Containers/App';
import HomePage from './Containers/Home';
import PatternLibraryPage from './Components/patternLibrary/PatternLibrary';

function getEnvironmentDependentRoutes() {
  let routes = [];

  if (env.ENVIRONMENT !== 'prod') {
    routes = routes.concat([
      <Route key='pattern-library-section' path="/pattern-library/:section"
        component={PatternLibraryPage}
      />,
      <Redirect key='pattern-library-all' from="/pattern-library" to="/pattern-library/all" />
    ]);
  }

  return routes;
}

// start rendering the application
(function () {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={App}>
          <Route onEnter={isGuest(store)}>
            <Route path='/' component={HomePage} />
          </Route>
          {getEnvironmentDependentRoutes()}
        </Route>
      </Router>
    </Provider>
    , document.getElementById('app')
  );
})();
