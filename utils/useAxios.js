import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

export const baseAxios = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'content-tpe': 'application/json',
    Accept: 'application/json',
  },
});

const useAxios = makeUseAxios({
  axios: baseAxios,
});

export default useAxios;
