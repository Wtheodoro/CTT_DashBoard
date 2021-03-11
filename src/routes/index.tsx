import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Users from '../pages/Users'
import Products from '../pages/Products'

const Routes  = () => {
  return (
      <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/users" exact component={Users} />
          <Route path="/products" exact component={Products} />
      </Switch>
  );
}

export default Routes;