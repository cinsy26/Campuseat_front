import axios from './axiosInstance';
import {AxiosError} from 'axios';

export const verifyEmail = async (email: string) => {
  try {
    const response = await axios.post('/api/user/signup/verifyEmail', {
      email,
      univName: '서울여자대학교',
    });
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    throw err.response?.data || {message: '이메일 인증 실패'};
  }
};

export const checkVerificationCode = async (email: string, code: string) => {
  try {
    const response = await axios.post('/api/user/signup/checknum', {
      email,
      code: parseInt(code, 10),
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || {message: '인증번호 확인 실패'};
  }
};
