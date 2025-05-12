import axios from './axiosInstance';
import {AxiosError} from 'axios';

//장소 불러오기
export const fetchPlace = async () => {
  const response = await axios.get('/api/reservation/place');
  return response.data; // List of { building, place, availableSeats }
};

export interface SeatInfo {
  id: number;
  name: string;
  status: 'AVAILABLE' | 'OCCUPIED' | 'SELECTED' | 'OTHER'; // SeatStatus enum에 맞춰 수정
  placeName: string;
  buildingName: string;
}

export const fetchSeatByPlace = async (
  placeId: number,
): Promise<SeatInfo[]> => {
  const response = await axios.get(`/api/reservation/${placeId}/seat`);
  return response.data;
};

//좌석 예약
export const reserveSeat = async (seatId: number) => {
  try {
    const response = await axios.patch(`/api/seat/reservation/${seatId}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('좌석 예약 실패:', axiosError.message);
    throw axiosError;
  }
};
