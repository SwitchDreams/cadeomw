import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Dashboard from '../pages/Dashboard';
import Course from '../pages/Course';
import ListCourses from '../pages/ListCourses';
import ListSubjects from '../pages/ListSubjects';
import ListDepartments from '../pages/ListDepartments';
import Subject from '../pages/Subject';
import Map from '../pages/Map';
import NotFound from '../pages/NotFound';
import TimeTable from '../pages/TimeTable';
import FaqSigaa from '../pages/FaqSigaa';
import ContactUs from '../pages/ContactUs';
import DepartmentPage from '../pages/Departments';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/timetable" exact component={TimeTable} />
    <Route path="/faq-sigaa" exact component={FaqSigaa} />
    <Route path="/courses/:id" component={Course} />
    <Route path="/list-courses" component={ListCourses} />
    <Route path="/list-subjects" component={ListSubjects} />
    <Route path="/list-departments" component={ListDepartments} />
    <Route path="/subjects/:subject_id" component={Subject} />
    <Route path="/map" component={Map} />
    <Route path="/about-us" component={ContactUs} />
    <Route path="/department/:id" component={DepartmentPage} />
    <Route path="" component={NotFound} />
  </Switch>
);

export default Routes;
