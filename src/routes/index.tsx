import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Maintenance from '../pages/Maintenance';
import ContactUs from '../pages/ContactUs';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Maintenance} />
    <Route path="/about-us" component={ContactUs} />
    <Route path="" component={NotFound} />
  </Switch>
);

export default Routes;
