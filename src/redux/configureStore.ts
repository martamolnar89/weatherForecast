import { createStore, combineReducers, Reducer, Store, Action } from 'redux';
import forecastReducer from './reducers/forecastReducer';
import { RootState } from 'types';

const rootReducer: Reducer<RootState> = combineReducers({
  forecast: forecastReducer,
});

export const store: Store<RootState, Action> = createStore(rootReducer);
