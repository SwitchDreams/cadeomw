import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Maintenance from '../pages/Maintenance';
import NotFound from '../pages/NotFound';
import TimeTable from '../pages/TimeTable';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Maintenance} />
    <Route path="/timetable" exact component={TimeTable} />
    <Route path="" component={NotFound} />
  </Switch>
);

export default Routes;
