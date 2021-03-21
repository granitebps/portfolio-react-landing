import axios from 'axios';

const url = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export const baseAxios = axios.create({
  baseURL: url,
  headers: {
    'content-tpe': 'application/json',
    Accept: 'application/json',
  },
});
