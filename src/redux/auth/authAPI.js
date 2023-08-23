import axios from 'axios';
import { setHeadersToken, unSetHeadersToken } from 'redux/user/userApi';

// Базовый URL для API
const baseURL = 'https://health-app-1rfu.onrender.com/api/auth';

// Функция для регистрации
export const signUpAPI = async userData => {
  const { data } = await axios.post(`${baseURL}/signup`, userData);
  setHeadersToken(data.user.token);
  return data;
};

// Функция для входа
export const signInAPI = async userData => {
  const { data } = await axios.post(`${baseURL}/login`, userData);
  setHeadersToken(data.user.token);
  return data;
};

// Функция для восстановления пароля
export const forgotPasswordAPI = async email => {
  const { data } = await axios.post(`${baseURL}/forgot-password`, { email });
  return data;
};

export const addGoals = async body => {
  const { data } = await axios.post(`${baseURL}/requirements`, body);
  return data;
};
// Функция для выхода
export const logoutAPI = async () => {
  const { data } = await axios.post(`${baseURL}/logout`);
  unSetHeadersToken();
  return data;
};
