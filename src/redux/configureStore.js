import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './reducers/greetings';

const store = configureStore({ reducer: { greetings: greetingsReducer } });
export default store;
