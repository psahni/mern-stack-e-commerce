import axios from 'axios';

const BASE_URL = 'http://localhost:9000/v1/api';

export const publicRequest = axios.create(
    {
      baseURL: BASE_URL
    }
);
