import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Dashboard from '../pages/Dashboard';
import Course from '../pages/Course';
import ListCourses from '../pages/ListCourses';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/course" component={Course} />
    <Route path="/list-courses" component={ListCourses} />
  </Switch>
);

export default Routes;
