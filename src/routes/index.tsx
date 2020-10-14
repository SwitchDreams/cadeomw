import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Dashboard from '../pages/Dashboard';
import Course from '../pages/Course';
import ListCourses from '../pages/ListCourses';
import ListSubjects from '../pages/ListSubjects';
import Subject from '../pages/Subject';
import Map from '../pages/Map';
import NotFound from '../pages/NotFound';
import TimeTable from '../pages/TimeTable';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/timetable" exact component={TimeTable} />
    <Route path="/courses/:id" component={Course} />
    <Route path="/list-courses" component={ListCourses} />
    <Route path="/list-subjects" component={ListSubjects} />
    <Route path="/subjects/:subject_id" component={Subject} />
    <Route path="/map" component={Map} />
    <Route path="" component={NotFound} />
  </Switch>
);

export default Routes;
