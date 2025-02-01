import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};