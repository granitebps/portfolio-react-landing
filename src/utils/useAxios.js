import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

export const baseAxios = axios.create({
  baseURL: 'https://api.granitebps.com/api/v1',
  // baseURL: 'http://localhost:8000/api/v1',
  headers: {
    'content-tpe': 'application/json',
    Accept: 'application/json',
  },
});

const useAxios = makeUseAxios({
  axios: baseAxios,
});

export default useAxios;
