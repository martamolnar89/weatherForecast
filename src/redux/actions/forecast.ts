import { ActionCreator } from 'redux';
import { Forecast } from 'types';
import {
  FetchForecastSuccessAction,
  FetchForecastErrorAction,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_ERROR,
} from 'types/actionTypes';
import * as forecastService from '../../services/forecast';
import { store } from 'redux/configureStore';

export const fetchForecastSuccessAction: ActionCreator<FetchForecastSuccessAction> = (
  forecast: Forecast,
) => ({
  type: FETCH_FORECAST_SUCCESS,
  payload: forecast,
});

export const fetchForecastErrorAction: ActionCreator<FetchForecastErrorAction> = () => ({
  type: FETCH_FORECAST_ERROR,
});

export const getForecastData = async (lat: number, lon: number) => {
  try {
    const { data } = await forecastService.getForecastData(lat, lon);
    store.dispatch(fetchForecastSuccessAction(data));
  } catch (error) {
    console.warn(error);
    store.dispatch(fetchForecastErrorAction());
  }
};
