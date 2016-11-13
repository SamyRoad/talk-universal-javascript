/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import renderLayout from './layout';
import configureStore from '../store/configureStore';
import routes from '../routes';

const app = express();
const port = 3000;

app.use('/images', express.static(path.resolve('src/public/images')));
app.use('/scripts', express.static(path.resolve('src/public/scripts')));

const store = configureStore();

app.use((req, res, next) =>
  match({ routes, location: req.url }, (error, redirectLocation, props) => {
    if (error) {
      next(error);
    } else if (props) {
      const { components } = props;

      const component = components[components.length - 1];

      // Dispatch necessary actions to build initial state
      const fetchData = component.fetchData ? component.fetchData : () => Promise.resolve();

      fetchData(store.dispatch)
        .then(() => {
          const html = ReactDOMServer.renderToString(
            <Provider store={store}>
              <RouterContext {...props} />
            </Provider>
          );

          res.status(200).send(renderLayout(html, store.getState()));
        })
        .catch(errorDispatch => next(errorDispatch))
      ;
    } else {
      res.status(404).send('Not found');
    }
  })
);

app.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(error); // eslint-disable-line no-console

  return res.status(500).send(error);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`'app-server' listening at 0.0.0.0:${port}`); // eslint-disable-line no-console
});
