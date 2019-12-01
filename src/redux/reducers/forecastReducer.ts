import { ForecastActions } from 'types/actionTypes';
import { ForecastState } from 'types';
import {
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_ERROR,
} from 'types/actionTypes';

const initialState: ForecastState = {
  weatherData: null,
  errorMessage: null,
};

const forecastReducer = (
  state: ForecastState = initialState,
  action: ForecastActions,
) => {
  switch (action.type) {
    case FETCH_FORECAST_SUCCESS: {
      return {
        ...state,
        weatherData: action.payload,
        errorMessage: null,
      };
    }
    case FETCH_FORECAST_ERROR: {
      return {
        ...state,
        errorMessage:
          'Fetching weather forecast is failed. Try again. Pull down to refresh.',
        weatherData: null,
      };
    }
    default:
      return state;
  }
};

export default forecastReducer;
