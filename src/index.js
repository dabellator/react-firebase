import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Services/Store';
import { Router, Route, IndexRoute } from 'react-router';

// contexts
import App from './Containers/App';

// start rendering the application
render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);
