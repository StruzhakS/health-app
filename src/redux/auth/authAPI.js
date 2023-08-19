import axios from 'axios';

// Базовый URL для API
const baseURL = 'https://health-app-1rfu.onrender.com/api/auth';

// Функция для регистрации
export const signUpAPI = async userData => {
  try {
    const response = await axios.post(`${baseURL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Функция для входа
export const signInAPI = async userData => {
  try {
    const response = await axios.post(`${baseURL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Функция для восстановления пароля
export const forgotPasswordAPI = async email => {
  try {
    const response = await axios.post(`${baseURL}/forgot-password`, { email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logoutAPI = async (token) => {
  try {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const response = await axios.post(`${baseURL}/logout`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

