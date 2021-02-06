import axios from 'axios';
import https from 'https';

const instance = axios.create({
  baseURL: 'http://localhost:32797',
});

export default instance;
