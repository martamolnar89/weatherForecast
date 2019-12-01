export interface RootState {
  forecast: ForecastState;
}

export interface ForecastState {
  weatherData: Forecast | null;
  errorMessage: string | null;
}

export interface Forecast {
  cod: string;
  message: number;
  cnt: number;
  list: Weather[];
  city: City;
}

export interface Weather {
  dt: number;
  main: Temp;
  weather: WeatherCondition[];
  clouds: Cloud;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
}

export interface Temp {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Cloud {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Sys {
  pod: string;
}

export interface Coord {
  lat: number;
  lon: number;
}
