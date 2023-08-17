import axios from 'axios';

// Базовый URL для API
const baseURL = 'https://';

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
    const response = await axios.post(`${baseURL}/signin`, userData);
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
