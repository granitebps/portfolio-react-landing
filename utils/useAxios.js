import axios from 'axios';

export const baseAxios = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'content-tpe': 'application/json',
    Accept: 'application/json',
  },
});
