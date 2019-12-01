import { Action } from 'redux';
import { Forecast } from '.';

export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';
export const FETCH_FORECAST_ERROR = 'FETCH_FORECAST_ERROR';

export interface FetchForecastSuccessAction extends Action {
  type: 'FETCH_FORECAST_SUCCESS';
  payload: Forecast;
}

export interface FetchForecastErrorAction extends Action {
  type: 'FETCH_FORECAST_ERROR';
}

export type ForecastActions =
  | FetchForecastSuccessAction
  | FetchForecastErrorAction;
