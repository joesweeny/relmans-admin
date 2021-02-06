import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:32797',
});

export default instance;
