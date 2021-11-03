import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3008',
});

export default client;
