import axios from 'axios';

export default (headers, timeout = 0) => axios.create({
  baseURL: process.env.REACT_APP_EDGE_URL,
  timeout: timeout,
  headers,
});