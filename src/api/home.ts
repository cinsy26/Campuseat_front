// src/api/LoginApi.ts
import axios from './axiosInstance';

export const MyInfo = async () => {
  try {
    const response = await axios.post('/api/home/myinfo');
    return response.data;
  } catch (error) {
    console.error('MyInfo API Error:', error);
    throw error;
  }
};
