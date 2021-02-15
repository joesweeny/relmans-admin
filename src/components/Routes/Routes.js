import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from '../Login/Login';
import Product from '../Product/Product';
import useAuthenticatesUser from '../../hooks/useAuthenticatesUser';

const Routes = () => {
  const { isAuthenticated, loading, login } = useAuthenticatesUser();

  console.log(isAuthenticated);

  return (
    <Switch>
      <Route path="/products" exact component={Product} />
      <Route exact path="/">
        {isAuthenticated ? (
          <Redirect to="/" push />
        ) : (
          <Login loading={loading} login={login} />
        )}
      </Route>
    </Switch>
  );
};

export default Routes;
