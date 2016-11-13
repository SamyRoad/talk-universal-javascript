/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Home from '../containers/Home';
import configureStore from '../store/configureStore';

require('../styles/main.scss');

const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
