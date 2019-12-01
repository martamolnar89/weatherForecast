const testData = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1574953200,
      main: {
        temp: 3.57,
        temp_min: 3.57,
        temp_max: 6.16,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 995,
        humidity: 81,
        temp_kf: -2.59,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.71,
        deg: 28,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-11-28 15:00:00',
    },
    {
      dt: 1574964000,
      main: {
        temp: 5.14,
        temp_min: 5.14,
        temp_max: 7.08,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 996,
        humidity: 76,
        temp_kf: -1.94,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 3.03,
        deg: 37,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-11-28 18:00:00',
    },
  ],
  city: {
    id: 5391959,
    name: 'San Francisco',
    coord: {
      lat: 37.7749,
      lon: -122.4195,
    },
    country: 'US',
    population: 805235,
    timezone: -28800,
    sunrise: 1574953410,
    sunset: 1574988729,
  },
};

export default testData;
