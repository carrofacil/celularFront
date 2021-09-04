import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_DB_HOST}`,
  },
});

export { api };
