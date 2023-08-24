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

export async function updateSettingsApi(body) {
  const { data } = await axios.post(
    '/settings',

    {
      name: body.name,
      gender: body.gender,
      age: body.age,
      height: body.height,
      weight: body.weight,
      activity: body.activity,
      avatar: body.avatar,
    },
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  );
  return data;
}

export async function getFoodIntake() {
  const { data } = await axios.get('/food-intake');
  return data;
}

export async function setWaterIntake(body) {
  const { data } = await axios.post('/water-intake', body);
  return data;
}

export async function setFoodIntake(body) {
  const { data } = await axios.post('/food-intake', body);
  return data;
}
export async function getMonthStatistic(body) {
  const { data } = await axios.get(`/statistics?date=${body}`);
 
  return data;
  
}
export async function getYearStatistic(body) {
  const { data } = await axios.get(`/statistics-year?date=${body}`);

  return data;
}