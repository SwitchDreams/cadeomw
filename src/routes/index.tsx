import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Dashboard from '../pages/Dashboard';
import Course from '../pages/Course';
import ListCourses from '../pages/ListCourses';
import ListSubjects from '../pages/ListSubjects';
import Subject from '../pages/Subject';
import ContactUs from '../pages/ContactUs';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/courses/:id" component={Course} />
    <Route path="/list-courses" component={ListCourses} />
    <Route path="/subjects" exact component={ListSubjects} />
    <Route path="/subjects/:subject_id" component={Subject} />
    <Route path="/contact-us" component={ContactUs} />
    <Route path="" component={NotFound} />
  </Switch>
);

export default Routes;
