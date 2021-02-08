import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:32775',
});

export default instance;
