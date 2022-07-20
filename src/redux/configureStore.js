import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './reducers/greetings.js';

const store = configureStore({ reducer: { greetings: greetingsReducer } });
export default store;
