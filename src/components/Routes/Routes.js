import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Product from '../Product/Product';

const routes = () => (
  <Switch>
    <Route path="/products" exact component={Product} />
    <Redirect to="/" />
  </Switch>
);

export default routes;
