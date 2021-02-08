import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:32769',
});

export default instance;
