// src/api/LoginApi.ts
import axios from './axiosInstance';
import {AxiosError} from 'axios';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post('/api/user/login', {
      email,
      password,
    });
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    throw err.response?.data || {message: '로그인 실패'};
  }
};
