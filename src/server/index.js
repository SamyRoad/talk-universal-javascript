/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import path from 'path';
import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Home from '../containers/Home';
import rootReducer from '../reducers';
import renderLayout from './layout';

const app = express();
const port = 3000;

app.use('/images', express.static(path.resolve('src/public/images')));
app.use('/scripts', express.static(path.resolve('src/public/scripts')));

app.get('/', (req, res) => { // eslint-disable-line no-unused-vars
  fetch('http://localhost:4000/items')
    .then(response => response.json())
    .then((items) => {
      const initialState = { items };
      const store = createStore(rootReducer, initialState);

      const html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <Home />
        </Provider>
      );

      res.status(200).send(renderLayout(html, initialState));
    })
  ;
});

app.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(error); // eslint-disable-line no-console

  return res.status(500).send(error);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`'app-server' listening at 0.0.0.0:${port}`); // eslint-disable-line no-console
});
