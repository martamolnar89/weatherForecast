import axios from 'axios';

export const getForecastData = (lat: number, lon: number) => {
  return axios.get(
    'http://api.openweathermap.org/data/2.5/forecast?lat=' +
      lat +
      '&lon=' +
      lon +
      '&units=metric&appid=53da4bfc2c2656b35e10a374ee307b09',
  );
};
