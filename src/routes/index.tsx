import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
  </Switch>
);

export default Routes;
