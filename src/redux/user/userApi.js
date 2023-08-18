import axios from 'axios';

axios.defaults.baseURL = 'https://health-app-1rfu.onrender.com/api/user';

export function setHeadersToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function unSetHeadersToken() {
  axios.defaults.headers.common.Authorization = ``;
}

export async function updateGoalApi(body) {
  const { data } = await axios.put('/goal', { goal: body });
  return data;
}

export async function updateWeightApi(body) {
  const { data } = await axios.put('/weight', { weight: body });
  return data;
}
