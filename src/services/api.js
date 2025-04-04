import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dados.tcerj.tc.br/api/v1',
  timeout: 10000,
  headers: {
    'Accept': 'application/json'
  }
});

api.interceptors.response.use(
  response => {
    // A API retorna o array direto no response.data
    return response;
  },
  error => {
    if (error.response) {
      console.error('API Error:', {
        status: error.response.status,
        data: error.response.data
      });
    } else {
      console.error('API Request Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;