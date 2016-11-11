/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Home from '../containers/Home';
import itemsApp from '../reducers';

require('../styles/main.scss');

fetch('http://localhost:4000/items') // eslint-disable-line no-undef
  .then(response => response.json())
  .then((items) => {
    const store = createStore(itemsApp, { items });

    ReactDOM.render(<Home store={store} />, document.getElementById('root')); // eslint-disable-line no-undef
  });

