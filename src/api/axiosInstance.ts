import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // iOS 에뮬레이터니까 이대로 OK
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
