import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import ProductList from '../ProductList/ProductList';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ProductList} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default routes;
