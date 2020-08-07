import axios from 'axios';

const api = axios.create({
  baseURL: ' http://157.245.182.117/',
});

export const apiCourses = axios.create({
  baseURL: ' http://157.245.182.117/',
});

export default api;
