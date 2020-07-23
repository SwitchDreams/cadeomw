import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mw-melhorado-app.herokuapp.com',
});

export default api;
