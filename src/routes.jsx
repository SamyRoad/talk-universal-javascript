import React from 'react';
import { Route } from 'react-router';

import App from './components/App.jsx';
import Home from './containers/Home.jsx';
import ItemDetail from './containers/ItemDetail.jsx';

export default (
  <Route component={ App }>
    <Route path="/" component={ Home } />
    <Route path="/item/:id" component={ ItemDetail } />
  </Route>
);
