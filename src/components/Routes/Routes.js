import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import OrderContainer from '../OrderContainer/OrderContainer';
import Product from '../Product/Product';

const routes = () => (
  <Switch>
    <Route path="/orders" exact component={OrderContainer} />
    <Route path="/products" exact component={Product} />
    <Redirect to="/orders" />
  </Switch>
);

export default routes;
