import { configureStore } from '@reduxjs/toolkit';
import phonesReducer from './slices/phonesSlice';
import processorsReducer from './slices/processorsSlice';

const store = configureStore({
  reducer: {
    phonesData: phonesReducer,
    processorsData: processorsReducer,
  },
});

export default store;
