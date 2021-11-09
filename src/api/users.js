import axios from 'axios';

export const getUsers = () => {
  return axios.get('/users', {
    params: {
      total: 1000,
      per_page: 10
    }
  });
};
