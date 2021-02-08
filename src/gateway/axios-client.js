import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:32773',
});

export default instance;
