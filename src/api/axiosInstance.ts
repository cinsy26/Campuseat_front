import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://52.79.181.144:8080',
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

export default axiosInstance;
