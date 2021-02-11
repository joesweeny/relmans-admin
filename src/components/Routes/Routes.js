import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Product from '../Product/Product';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/products" exact component={Product} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default routes;
