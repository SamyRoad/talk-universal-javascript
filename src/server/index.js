/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import App from '../components/App';
import Home from '../containers/Home';
import ItemDetail from '../containers/ItemDetail';
import renderLayout from './layout';
import configureStore from '../store/configureStore';
import { fetchItems } from '../actions/items';

const app = express();
const port = 3000;

app.use('/images', express.static(path.resolve('src/public/images')));
app.use('/scripts', express.static(path.resolve('src/public/scripts')));

const store = configureStore();

app.get('/', (req, res) => { // eslint-disable-line no-unused-vars
  store
    .dispatch(fetchItems())
    .then(() => {
      const html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <App>
            <Home />
          </App>
        </Provider>
      );

      res.status(200).send(renderLayout(html, store.getState()));
    })
  ;
});

app.get('/item/:id', (req, res) => {
  store
    .dispatch(fetchItems())
    .then(() => {
      const html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <App>
            <ItemDetail
              params={{ id: req.params.id }}
            />
          </App>
        </Provider>
      );

      res.status(200).send(renderLayout(html, store.getState()));
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
