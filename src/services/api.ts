import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const apiCourses = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
