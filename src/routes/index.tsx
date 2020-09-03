import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Dashboard from '../pages/Dashboard';
import Course from '../pages/Course';
import ListCourses from '../pages/ListCourses';
import Subject from '../pages/Subject';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/courses/:id" component={Course} />
    <Route path="/list-courses" component={ListCourses} />
    <Route path="/subjects/:subject_id" component={Subject} />
    <Route path="" component={NotFound} />
  </Switch>
);

export default Routes;
