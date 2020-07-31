import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Dashboard from '../pages/Dashboard';
import Course from '../pages/Course';
import ListCourses from '../pages/ListCourses';
import Subject from '../pages/Subject';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/courses" component={Course} />
    <Route path="/list-courses" component={ListCourses} />
    <Route path="/subjects/:subject_id" component={Subject} />
  </Switch>
);

export default Routes;
