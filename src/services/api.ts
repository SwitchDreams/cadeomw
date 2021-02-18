import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back.cadeomw.com.br',
});

export default api;
