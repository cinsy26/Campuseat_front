import axios from './axiosInstance';
import {AxiosError} from 'axios';

export const fetchPlace = async () => {
  const response = await axios.get('/api/reservation/place');
  return response.data; // List of { building, place, availableSeats }
};
