import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dados.tcerj.tc.br/api/v1',
  timeout: 10000,
});


api.interceptors.response.use(
  response => {
    if (response.data) {
      return {
        ...response,
        data: {
          data: response.data,
          total: response.headers['x-total-count'] || 0
        }
      };
    }
    return response;
  },
  error => {
    if (error.response) {
      console.error('API Response Error:', error.response.status, error.response.data);
    } else {
      console.error('API Request Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;