/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Home from '../containers/Home';
import rootReducer from '../reducers';

require('../styles/main.scss');

const initialState = window.__INITIAL_STATE__;

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
