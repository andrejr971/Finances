import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Transaction from '../pages/Transaction';
import Profile from '../pages/Profile';
import Category from '../pages/Category';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/transaction" component={Transaction} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/category" component={Category} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
