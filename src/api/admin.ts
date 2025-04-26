// src/api/QrApi.ts
import axios from './axiosInstance';
import {AxiosError} from 'axios';

export const createQR = async ({
  buildingName,
  locationName,
  seatCount,
  email,
}: {
  buildingName: string;
  locationName: string;
  seatCount: number;
  email: string;
}) => {
  try {
    const response = await axios.post('/api/admin/createQR', {
      buildingName,
      locationName,
      seatCount,
      email,
    });
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    throw err.response?.data || {message: 'QR 생성 실패'};
  }
};
