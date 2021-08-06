import { createStore, combineReducers, applyMiddleware } from 'redux';
import {DataReducer} from '../DataReducer';
import { createLogger } from 'redux-logger'


const rootReducer = combineReducers({
    DataReducer: DataReducer,
});

export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(createLogger()));//createLogger()
}